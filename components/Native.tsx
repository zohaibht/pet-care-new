
import React from 'react';
import { 
  View as RNView, 
  Text as RNText, 
  Image as RNImage, 
  TouchableOpacity as RNTouchableOpacity, 
  ScrollView as RNScrollView, 
  TextInput as RNTextInput,
  StyleSheet as RNStyleSheet,
  Platform as RNPlatform,
  Dimensions as RNDimensions,
  SafeAreaView as RNSafeAreaView,
  ViewStyle,
  TextStyle,
  ImageStyle
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * TRUE NATIVE BRIDGE
 * Uses actual React Native components to ensure 100% compatibility with 
 * Expo Snack (iOS, Android, and Web).
 */

export const Platform = RNPlatform;
export const Dimensions = RNDimensions;
export const StyleSheet = RNStyleSheet;

interface BaseProps {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[] | any;
}

export const View: React.FC<BaseProps> = ({ children, style }) => (
  <RNView style={style}>
    {children}
  </RNView>
);

export const SafeAreaView: React.FC<BaseProps> = ({ children, style }) => (
  <RNSafeAreaView style={[{ flex: 1 }, style]}>
    {children}
  </RNSafeAreaView>
);

export const Text: React.FC<BaseProps & { numberOfLines?: number }> = ({ children, style, numberOfLines }) => (
  <RNText style={style} numberOfLines={numberOfLines}>
    {children}
  </RNText>
);

export const TouchableOpacity: React.FC<BaseProps & { onPress?: () => void; activeOpacity?: number }> = ({ 
  children, style, onPress, activeOpacity = 0.7 
}) => (
  <RNTouchableOpacity 
    onPress={onPress} 
    activeOpacity={activeOpacity} 
    style={style}
  >
    {children}
  </RNTouchableOpacity>
);

export const ScrollView: React.FC<BaseProps & { 
  horizontal?: boolean; 
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  contentContainerStyle?: ViewStyle;
}> = ({ 
  children, style, horizontal, showsVerticalScrollIndicator, showsHorizontalScrollIndicator, contentContainerStyle 
}) => (
  <RNScrollView 
    style={style} 
    horizontal={horizontal} 
    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
    contentContainerStyle={contentContainerStyle}
  >
    {children}
  </RNScrollView>
);

export const Image: React.FC<{ source: { uri: string }; style?: ImageStyle | any }> = ({ source, style }) => (
  <RNImage source={source} style={style} />
);

export const TextInput: React.FC<{ 
  value?: string; 
  onChangeText?: (text: string) => void; 
  placeholder?: string; 
  style?: TextStyle | any;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}> = ({ value, onChangeText, placeholder, style, secureTextEntry, keyboardType }) => (
  <RNTextInput 
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    style={style}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
  />
);

export const MaterialIcon: React.FC<{ name: any; size?: number; color?: string; style?: ViewStyle | any }> = ({ name, size = 24, color = '#000', style }) => (
  <MaterialIcons name={name} size={size} color={color} style={style} />
);
