import { View, Text, TextInput, ScrollView, Pressable } from "../src/tw";
import { useState, useEffect } from "react";
import { Zap as RNZap, RefreshCcw as RNRefresh } from "lucide-react-native";
const Zap = RNZap as any;
const RefreshCcw = RNRefresh as any;
import React from "react";

export default function OhmsLaw() {
  const [volts, setVolts] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [power, setPower] = useState("");

  const calculate = () => {
    const v = parseFloat(volts);
    const i = parseFloat(current);
    const r = parseFloat(resistance);

    if (!isNaN(v) && !isNaN(i)) {
      setResistance((v / i).toFixed(2));
      setPower((v * i).toFixed(2));
    } else if (!isNaN(v) && !isNaN(r)) {
      setCurrent((v / r).toFixed(4));
      setPower((v * v / r).toFixed(2));
    } else if (!isNaN(i) && !isNaN(r)) {
      setVolts((i * r).toFixed(2));
      setPower((i * i * r).toFixed(2));
    }
  };

  const clear = () => {
    setVolts("");
    setCurrent("");
    setResistance("");
    setPower("");
  };

  return (
    <ScrollView className="flex-1 bg-secondary p-4">
      <View className="bg-slate-800/80 border border-slate-700 p-6 rounded-3xl mb-6 items-center">
        <View className="w-16 h-16 bg-blue-500/20 rounded-full items-center justify-center mb-4">
          <Zap color={"#3b82f6" as any} size={32} />
        </View>
        <Text className="text-white text-center text-sm mb-4">
          Ingresa al menos dos valores para calcular los demás automáticamente.
        </Text>
        
        <View className="w-full gap-4">
          <View>
            <Text className="text-gray-400 mb-2 ml-1">Voltaje (V)</Text>
            <TextInput
              className="bg-slate-900 border border-slate-700 p-4 rounded-xl text-white text-lg font-mono focus:border-blue-500"
              placeholder="0.00"
              placeholderTextColor="#475569"
              keyboardType="numeric"
              value={volts}
              onChangeText={setVolts}
            />
          </View>

          <View>
            <Text className="text-gray-400 mb-2 ml-1">Corriente (A)</Text>
            <TextInput
              className="bg-slate-900 border border-slate-700 p-4 rounded-xl text-white text-lg font-mono focus:border-blue-500"
              placeholder="0.00"
              placeholderTextColor="#475569"
              keyboardType="numeric"
              value={current}
              onChangeText={setCurrent}
            />
          </View>

          <View>
            <Text className="text-gray-400 mb-2 ml-1">Resistencia (Ω)</Text>
            <TextInput
              className="bg-slate-900 border border-slate-700 p-4 rounded-xl text-white text-lg font-mono focus:border-blue-500"
              placeholder="0.00"
              placeholderTextColor="#475569"
              keyboardType="numeric"
              value={resistance}
              onChangeText={setResistance}
            />
          </View>
        </View>

        <View className="flex-row w-full gap-4 mt-8">
          <Pressable 
            onPress={calculate}
            className="flex-1 bg-blue-600 p-4 rounded-2xl items-center active:bg-blue-700"
          >
            <Text className="text-white font-bold text-lg">Calcular</Text>
          </Pressable>
          
          <Pressable 
            onPress={clear}
            className="w-16 bg-slate-700 p-4 rounded-2xl items-center justify-center active:bg-slate-600"
          >
            <RefreshCcw color={"#fff" as any} size={24} />
          </Pressable>
        </View>
      </View>

      {power && (
        <View className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-3xl mb-8">
          <Text className="text-amber-500 font-bold mb-2">Potencia Disipada (P)</Text>
          <Text className="text-4xl font-mono text-white">{power} W</Text>
        </View>
      )}
    </ScrollView>
  );
}
