import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SearchHeaderProps {
  searchTerm: string;
  clearInput: () => void;
  onKeyPress: () => void;
  onChangeText: (text: string) => void;
  totalHits: number | null;
  isLoading: boolean;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  searchTerm,
  clearInput,
  onKeyPress,
  onChangeText,
  isLoading,
}) => {
  const {
    header,
    headerRow,
    inputContainer,
    closeIcon,
    inputStyle,
    searchIconContainer,
  } = styles;
  return (
    <View style={header}>
      <View style={headerRow}>
        <View style={inputContainer}>
          <TextInput
            style={inputStyle}
            value={searchTerm}
            placeholder={'search'}
            autoCapitalize="none"
            placeholderTextColor="#a55266"
            onChangeText={onChangeText}
            onKeyPress={onKeyPress}
          />
          {searchTerm && (
            <TouchableOpacity style={closeIcon} onPress={clearInput}>
              <Icon name="close" color="#6e5d96" size={14} />
            </TouchableOpacity>
          )}
        </View>
        <View style={searchIconContainer}>
          {isLoading ? (
            <ActivityIndicator color={'#b64190'} />
          ) : (
            <Icon name="search" size={24} color={'#b64190'} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    marginTop: -10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#6e5d96',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {flex: 1},
  closeIcon: {
    position: 'absolute',
    width: 22,
    height: 22,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    top: 18,
    right: 12,
  },
  inputStyle: {
    height: 54,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#1d72bd',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  searchIconContainer: {
    flex: 0.2,
    borderWidth: 1,
    borderColor: '#1d72bd',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
});

export default SearchHeader;
