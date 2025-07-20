import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./TasksStyle";

export default function Task({
  text,
  completed,
  onDelete,
  onToggleComplete,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  function confirmEdit() {
    onEdit(editedText.trim());
    setIsEditing(false);
  }

  return (
    <View style={styles.item}>
      {isEditing ? (
        <View style={[styles.itemLeft, styles.itemEdit]}>
          <TextInput
           style={styles.editInput}
            value={editedText}
            onChangeText={setEditedText}
            autoFocus
          />

          <TouchableOpacity style={styles.editButton} onPress={confirmEdit}>
            <Text>Ok</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square} onPress={onToggleComplete}>
              <Text style={styles.iconButton}>{completed ? "✔️" : "🔵"}</Text>
            </TouchableOpacity>

            <Text
              style={[
                styles.itemText,
                completed && {
                  textDecorationLine: "line-through",
                  color: "gray",
                },
              ]}
            >
              {text}
            </Text>
          </View>

          <View style={styles.itemButtom}>
            <TouchableOpacity style={styles.deleteButtom} onPress={onDelete}>
              <Text style={styles.iconButton}>❌</Text>
            </TouchableOpacity>
            {completed ? (
              <TouchableOpacity style={styles.editButtom}>
                <Text style={styles.iconButton}> 🔒 </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.editButtom}
                onPress={() => setIsEditing(!isEditing)}
              >
                <Text style={styles.iconButton}>📝</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </View>
  );
}
