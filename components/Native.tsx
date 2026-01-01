
import React from 'react';

/**
 * HIGH FIDELITY REACT NATIVE BRIDGE
 * To move to a real React Native project:
 * 1. Change imports from '../components/Native' to 'react-native'
 * 2. That's it!
 */

// Helper to handle React Native style arrays for Web
const flattenStyle = (style: any) => {
  if (!style) return undefined;
  if (!Array.isArray(style)) return style;
  return Object.assign({}, ...style.filter(Boolean));
};

export const Platform = {
  OS: 'web',
  select: (obj: any) => obj.web || obj.default,
};

export const Dimensions = {
  get: (type: 'window' | 'screen') => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }),
};

// Simple StyleSheet implementation for Web
export const StyleSheet = {
  create: <T extends Record<string, any>>(styles: T): T => {
    return styles;
  },
  hairlineWidth: 1,
};

interface BaseProps {
  children?: React.ReactNode;
  style?: any;
  className?: string;
}

export const View: React.FC<BaseProps> = ({ children, style, className }) => (
  <div 
    className={className} 
    style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      position: 'relative', 
      ...flattenStyle(style) 
    }}
  >
    {children}
  </div>
);

export const SafeAreaView: React.FC<BaseProps> = ({ children, style }) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    flex: 1,
    paddingTop: 'env(safe-area-inset-top)', 
    paddingBottom: 'env(safe-area-inset-bottom)',
    ...flattenStyle(style) 
  }}>
    {children}
  </div>
);

export const Text: React.FC<BaseProps> = ({ children, style, className }) => (
  <span 
    className={className} 
    style={{ 
      display: 'block', 
      ...flattenStyle(style) 
    }}
  >
    {children}
  </span>
);

export const TouchableOpacity: React.FC<BaseProps & { onPress?: () => void; activeOpacity?: number }> = ({ 
  children, style, onPress, activeOpacity = 0.7, className 
}) => {
  const flattened = flattenStyle(style) || {};
  return (
    <button 
      // Changed from onClick internal mapping to using the onPress prop name in the component signature
      onClick={onPress}
      className={className}
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        border: 'none', 
        background: 'none', 
        padding: 0, 
        cursor: 'pointer',
        transition: 'opacity 0.1s',
        ...flattened
      }}
      onMouseDown={(e) => (e.currentTarget.style.opacity = activeOpacity.toString())}
      onMouseUp={(e) => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {children}
    </button>
  );
};

export const ScrollView: React.FC<BaseProps & { horizontal?: boolean; showsVerticalScrollIndicator?: boolean }> = ({ 
  children, style, horizontal 
}) => (
  <div className="no-scrollbar" style={{ 
    display: 'flex', 
    flexDirection: horizontal ? 'row' : 'column', 
    overflowX: horizontal ? 'auto' : 'hidden', 
    overflowY: horizontal ? 'hidden' : 'auto',
    flex: 1,
    ...flattenStyle(style) 
  }}>
    {children}
  </div>
);

export const Image: React.FC<{ source: { uri: string }; style?: any; className?: string }> = ({ source, style, className }) => (
  <img 
    src={source.uri} 
    style={{ 
      objectFit: 'cover', 
      ...flattenStyle(style) 
    }} 
    className={className} 
    alt="" 
  />
);
