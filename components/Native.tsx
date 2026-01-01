
import React from 'react';

/**
 * PURE NATIVE BRIDGE
 * This exports components that behave like React Native components.
 * On Web, it maps to semantic HTML that mimics Native behavior.
 * This is the most compatible way to write Expo apps that also run in a browser.
 */

const flattenStyle = (style: any) => {
  if (!style) return {};
  if (!Array.isArray(style)) return style;
  return Object.assign({}, ...style.filter(Boolean));
};

export const Platform = {
  OS: 'web',
  select: (obj: any) => obj.web || obj.default,
};

export const Dimensions = {
  get: (type: 'window' | 'screen') => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 375,
    height: typeof window !== 'undefined' ? window.innerHeight : 812,
  }),
};

export const StyleSheet = {
  create: <T extends Record<string, any>>(styles: T): T => styles,
  hairlineWidth: 1,
};

interface BaseProps {
  children?: React.ReactNode;
  style?: any;
  className?: string; // Kept for transition but style is preferred
}

export const View: React.FC<BaseProps> = ({ children, style }) => (
  <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', flexShrink: 0, ...flattenStyle(style) }}>
    {children}
  </div>
);

export const SafeAreaView: React.FC<BaseProps> = ({ children, style }) => (
  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingTop: 'env(safe-area-inset-top, 20px)', ...flattenStyle(style) }}>
    {children}
  </div>
);

export const Text: React.FC<BaseProps & { numberOfLines?: number }> = ({ children, style, numberOfLines }) => {
  const s = flattenStyle(style);
  const lineStyle: any = numberOfLines ? {
    display: '-webkit-box',
    WebkitLineClamp: numberOfLines,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  } : { display: 'block' };
  
  return <span style={{ ...lineStyle, ...s }}>{children}</span>;
};

export const TouchableOpacity: React.FC<BaseProps & { onPress?: () => void; activeOpacity?: number }> = ({ 
  children, style, onPress, activeOpacity = 0.7 
}) => (
  <button 
    onClick={onPress}
    style={{ 
      display: 'flex', flexDirection: 'column', border: 'none', background: 'none', 
      padding: 0, cursor: 'pointer', transition: 'opacity 0.1s', alignItems: 'stretch',
      textAlign: 'left', font: 'inherit', color: 'inherit', ...flattenStyle(style)
    }}
    onMouseDown={(e) => (e.currentTarget.style.opacity = activeOpacity.toString())}
    onMouseUp={(e) => (e.currentTarget.style.opacity = '1')}
    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
  >
    {children}
  </button>
);

// Fix: Added showsHorizontalScrollIndicator and contentContainerStyle to ScrollView props definition
export const ScrollView: React.FC<BaseProps & { 
  horizontal?: boolean; 
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  contentContainerStyle?: any;
}> = ({ 
  children, style, horizontal, contentContainerStyle 
}) => (
  <div style={{ 
    display: 'flex', flexDirection: horizontal ? 'row' : 'column', 
    overflowX: horizontal ? 'auto' : 'hidden', overflowY: horizontal ? 'hidden' : 'auto',
    flex: 1, scrollbarWidth: 'none', ...flattenStyle(style) 
  }}>
    <div style={{ display: 'flex', flexDirection: horizontal ? 'row' : 'column', ...flattenStyle(contentContainerStyle) }}>
      {children}
    </div>
  </div>
);

export const Image: React.FC<{ source: { uri: string }; style?: any }> = ({ source, style }) => (
  <img src={source?.uri} style={{ objectFit: 'cover', display: 'block', ...flattenStyle(style) }} alt="" />
);

export const TextInput: React.FC<{ 
  value?: string; 
  onChangeText?: (text: string) => void; 
  placeholder?: string; 
  style?: any;
  secureTextEntry?: boolean;
  keyboardType?: string;
}> = ({ value, onChangeText, placeholder, style, secureTextEntry }) => (
  <input 
    type={secureTextEntry ? 'password' : 'text'}
    value={value}
    onChange={(e) => onChangeText?.(e.target.value)}
    placeholder={placeholder}
    style={{ border: 'none', outline: 'none', background: 'none', padding: 0, font: 'inherit', ...flattenStyle(style) }}
  />
);

export const MaterialIcon: React.FC<{ name: string; size?: number; color?: string; style?: any }> = ({ name, size = 24, color = '#000', style }) => (
  <span className="material-icons-round" style={{ fontSize: size, color, ...flattenStyle(style) }}>{name}</span>
);
