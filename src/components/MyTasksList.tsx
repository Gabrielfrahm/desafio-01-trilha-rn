import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';


interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  dark: boolean;
}

interface HeaderProps {
  dark: boolean;
}

function FlatListHeaderComponent({dark} : HeaderProps) {
  return (
    <View>
      <Text style={dark ? styles.headerIsDark :styles.header}>Minhas tasks</Text>
    </View>
  )
}


export function MyTasksList({ tasks, onLongPress, onPress,  dark }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            //TODO - use onPress, onLongPress and style props
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done === true ?  dark ? styles.taskButtonDoneIsDark :styles.taskButtonDone : styles.taskButton}
          >
            <View 
              testID={`marker-${index}`}
              //TODO - use style prop
              style={item.done === true ? dark ? styles.taskMarkerDoneIsDark :styles.taskMarkerDone : dark ? styles.taskMarkerIsDark : styles.taskMarker}
            />
            <Text 
              //TODO - use style prop
              style={item.done === true ?  dark ? styles.taskTextDoneIsDark :styles.taskTextDone : dark ? styles.taskTextIsDark : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent dark={dark} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerIsDark: {
    color: '#67E480',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerIsDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#67E480',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextIsDark: {
    color: '#67E480',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneIsDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: '#67e48014',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneIsDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#67E480',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskTextDoneIsDark: {
    color: '#E1E1E6',
    textDecorationLine: 'line-through'
  }
})