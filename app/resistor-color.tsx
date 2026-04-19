import { View, Text, ScrollView, Pressable } from "../src/tw";
import { useState } from "react";
import React from "react";

type ColorBand = {
  name: string;
  color: string;
  value: number | null;
  mult: number;
  tol: number | null;
};

const COLORS: ColorBand[] = [
  { name: "Negro", color: "#000000", value: 0, mult: 1, tol: null },
  { name: "Marrón", color: "#8B4513", value: 1, mult: 10, tol: 1 },
  { name: "Rojo", color: "#FF0000", value: 2, mult: 100, tol: 2 },
  { name: "Naranja", color: "#FFA500", value: 3, mult: 1000, tol: null },
  { name: "Amarillo", color: "#FFFF00", value: 4, mult: 10000, tol: null },
  { name: "Verde", color: "#008000", value: 5, mult: 100000, tol: 0.5 },
  { name: "Azul", color: "#0000FF", value: 6, mult: 1000000, tol: 0.25 },
  { name: "Violeta", color: "#EE82EE", value: 7, mult: 10000000, tol: 0.1 },
  { name: "Gris", color: "#808080", value: 8, mult: 100000000, tol: 0.05 },
  { name: "Blanco", color: "#FFFFFF", value: 9, mult: 1000000000, tol: null },
];

const SPECIAL: ColorBand[] = [
  { name: "Oro", color: "#FFD700", value: null, mult: 0.1, tol: 5 },
  { name: "Plata", color: "#C0C0C0", value: null, mult: 0.01, tol: 10 },
];

export default function ResistorColor() {
  const [band1, setBand1] = useState<ColorBand>(COLORS[1]);
  const [band2, setBand2] = useState<ColorBand>(COLORS[0]);
  const [mult, setMult] = useState<ColorBand>(COLORS[2]);
  const [tol, setTol] = useState<ColorBand>(SPECIAL[0]);

  const resistance = ((band1.value ?? 0) * 10 + (band2.value ?? 0)) * mult.mult;
  
  const formatResistance = (val: number) => {
    if (val >= 1000000) return (val / 1000000).toFixed(1) + " MΩ";
    if (val >= 1000) return (val / 1000).toFixed(1) + " kΩ";
    return val.toFixed(1) + " Ω";
  };

  return (
    <ScrollView className="flex-1 bg-secondary p-4">
      {/* Resistor Visualization */}
      <View className="bg-slate-800/80 border border-slate-700 p-8 rounded-3xl mb-6 items-center">
        <View className="flex-row items-center w-full justify-center h-12 bg-gray-300 rounded-full relative overflow-hidden">
          <View className="absolute left-[-20] w-12 h-1 bg-gray-400" />
          <View className="absolute right-[-20] w-12 h-1 bg-gray-400" />
          
          <View style={{ backgroundColor: band1.color }} className="w-5 h-full mr-1" />
          <View style={{ backgroundColor: band2.color }} className="w-5 h-full mr-1" />
          <View style={{ backgroundColor: mult.color }} className="w-5 h-full mr-4" />
          <View style={{ backgroundColor: tol.color }} className="w-5 h-full" />
        </View>
        
        <View className="mt-8 items-center">
          <Text className="text-4xl font-mono text-white font-bold">{formatResistance(resistance)}</Text>
          <Text className="text-gray-400 mt-1">±{tol.tol}% de tolerancia</Text>
        </View>
      </View>

      {/* Selectors */}
      <View className="gap-6 mb-8">
        <View>
          <Text className="text-gray-400 mb-3 font-semibold ml-1">Banda 1 & 2</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {COLORS.map((c) => (
              <Pressable 
                key={c.name}
                onPress={() => setBand1(c)}
                style={{ backgroundColor: c.color, borderWidth: band1.name === c.name ? 3 : 1 }}
                className="w-12 h-12 rounded-xl mr-2 border-white/20"
              />
            ))}
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mt-3">
            {COLORS.map((c) => (
              <Pressable 
                key={c.name}
                onPress={() => setBand2(c)}
                style={{ backgroundColor: c.color, borderWidth: band2.name === c.name ? 3 : 1 }}
                className="w-12 h-12 rounded-xl mr-2 border-white/20"
              />
            ))}
          </ScrollView>
        </View>

        <View>
          <Text className="text-gray-400 mb-3 font-semibold ml-1">Multiplicador</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {[...COLORS, ...SPECIAL].map((c) => (
              <Pressable 
                key={c.name}
                onPress={() => setMult(c)}
                style={{ backgroundColor: c.color, borderWidth: mult.name === c.name ? 3 : 1 }}
                className="w-12 h-12 rounded-xl mr-2 border-white/20"
              />
            ))}
          </ScrollView>
        </View>

        <View>
          <Text className="text-gray-400 mb-3 font-semibold ml-1">Tolerancia</Text>
          <View className="flex-row flex-wrap">
            {[...COLORS, ...SPECIAL].filter(c => c.tol !== null).map((c) => (
              <Pressable 
                key={c.name}
                onPress={() => setTol(c)}
                className="flex-row items-center bg-slate-800 border border-slate-700 p-2 rounded-xl mr-2 mb-2 active:bg-slate-700"
                style={{ borderColor: tol.name === c.name ? "#3b82f6" : "#334155" }}
              >
                <View style={{ backgroundColor: c.color }} className="w-5 h-5 rounded-full mr-2" />
                <Text className="text-white text-xs">{c.name} ({c.tol}%)</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
