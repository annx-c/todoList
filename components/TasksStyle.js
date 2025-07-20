import React from "react";

import { StyleSheet } from "react-native";

styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 19,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  itemButtom: {
    flexDirection: "row",
    gap: 15,
  },

  square: {
    marginRight: 15,
  },

  itemText: {
    maxWidth: "80%",
  },

  iconButton: {
    fontSize: 15,
  },

  itemEdit: {
    justifyContent: "space-between",
    flex: 1,
  },

  editButton: {
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
});

export default styles;
