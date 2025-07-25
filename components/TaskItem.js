import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function TaskItem({ task, onPress, onEdit, onDelete }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ff6b6b';
      case 'medium': return '#ffd93d';
      case 'low': return '#6c757d';
      default: return '#6c757d';
    }
  };

  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.rightActions}>
        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <Text style={styles.actionText}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={onPress} onLongPress={onEdit}>
        <View style={styles.container}>
          <View style={styles.taskContent}>
            <View style={[styles.priorityIndicator, { backgroundColor: getPriorityColor(task.priority) }]} />
            <View style={styles.textContainer}>
              <Text style={[styles.title, task.completed && styles.completedText]}>{task.title}</Text>
              {task.description ? (
                <Text style={[styles.description, task.completed && styles.completedText]} numberOfLines={2}>
                  {task.description}
                </Text>
              ) : null}
              <Text style={styles.dueDate}>
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </Text>
            </View>
          </View>
          <View style={[styles.status, { backgroundColor: task.completed ? '#4ecdc4' : '#f8f9fa' }]}>
            <Text style={[styles.statusText, task.completed && styles.completedStatusText]}>
              {task.completed ? 'Done' : 'Open'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priorityIndicator: {
    width: 4,
    height: '100%',
    borderRadius: 2,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  dueDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  status: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 10,
  },
  statusText: {
    fontSize: 12,
    color: '#666',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  completedStatusText: {
    color: 'white',
  },
  rightActions: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  deleteButton: {
    backgroundColor: '#ff6b6b',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderRadius: 10,
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
    padding: 20,
  },
});