import { View, Text, TextInput, ScrollView, Pressable } from "../src/tw";
import { useState } from "react";
import { Spline, RefreshCcw } from "lucide-react-native";
import React from "react";

export default function VoltageDivider() {
  const [vin, setVin] = useState("5");
  const [r1, setR1] = useState("1000");
  const [r2, setR2] = useState("1000");
  const [vout, setVout] = useState("2.50");

  const calculate = () => {
    const v = parseFloat(vin);
    const res1 = parseFloat(r1);
    const res2 = parseFloat(r2);

    if (!isNaN(v) && !isNaN(res1) && !isNaN(res2)) {
      setVout((v * (res2 / (res1 + res2))).toFixed(2));
    }
  };

  return (
    <ScrollView className="flex-1 bg-secondary p-4">
      <View className="bg-slate-800/80 border border-slate-700 p-8 rounded-3xl mb-6 items-center">
        {/* Simple Schematic Drawing */}
        <View className="mb-6 items-center">
          <View className="w-1 h-6 bg-gray-500" />
          <View className="w-6 h-6 border-2 border-gray-400 items-center justify-center">
             <Text className="text-[10px] text-gray-400">R1</Text>
          </View>
          <View className="w-1 h-4 bg-gray-500 flex-row items-center">
            <View className="w-6 h-1 bg-blue-500 ml-1" />
            <Text className="text-blue-500 font-bold ml-2">Vout</Text>
          </View>
          <View className="w-6 h-6 border-2 border-gray-400 items-center justify-center">
             <Text className="text-[10px] text-gray-400">R2</Text>
          </View>
          <View className="w-1 h-6 bg-gray-500" />
          <View className="w-6 h-1 bg-gray-500" />
        </View>

        <Text className="text-4xl font-mono text-white font-bold">{vout} V</Text>
        <Text className="text-gray-400 mt-1">Voltaje de salida estimado</Text>
      </View>

      <View className="gap-4 mb-8">
        <View>
          <Text className="text-gray-400 mb-2 ml-1">Voltaje de Entrada (Vin)</Text>
          <TextInput
            className="bg-slate-900 border border-slate-700 p-4 rounded-xl text-white text-lg font-mono"
            placeholder="5"
            keyboardType="numeric"
            value={vin}
            onChangeText={setVin}
          />
        </View>

        <View className="flex-row gap-4">
          <View className="flex-1">
            <Text className="text-gray-400 mb-2 ml-1">R1 (Ω)</Text>
            <TextInput
              className="bg-slate-900 border border-slate-700 p-4 rounded-xl text-white text-lg font-mono"
              placeholder="1000"
              keyboardType="numeric"
              value={r1}
              onChangeText={setR1}
            />
          </View>
          <View className="flex-1">
            <Text className="text-gray-400 mb-2 ml-1">R2 (Ω)</Text>
            <TextInput
              className="bg-slate-900 border border-slate-700 p-4 rounded-xl text-white text-lg font-mono"
              placeholder="1000"
              keyboardType="numeric"
              value={r2}
              onChangeText={setR2}
            />
          </View>
        </View>

        <Pressable 
          onPress={calculate}
          className="bg-blue-600 p-5 rounded-2xl items-center mt-4 active:bg-blue-700"
        >
          <Text className="text-white font-bold text-lg">Calcular Vout</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
