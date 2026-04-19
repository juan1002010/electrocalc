import { View, Text, Pressable, ScrollView } from "../src/tw";
import { Link } from "expo-router";
import { Zap as RNZap, Palette as RNPalette, Spline as RNSpline, Info as RNInfo, ChevronRight as RNChevron } from "lucide-react-native";
const Zap = RNZap as any;
const Palette = RNPalette as any;
const Spline = RNSpline as any;
const Info = RNInfo as any;
const ChevronRight = RNChevron as any;
import React from "react";

export default function Dashboard() {
  const tools = [
    {
      id: "ohms-law",
      title: "Ley de Ohm",
      desc: "V = I × R",
      icon: <Zap color={"#3b82f6" as any} size={24} />,
      href: "/ohms-law",
    },
    {
      id: "resistor-color",
      title: "Código de Colores",
      desc: "4 y 5 bandas",
      icon: <Palette color={"#f59e0b" as any} size={24} />,
      href: "/resistor-color",
    },
    {
      id: "voltage-divider",
      title: "Divisor de Voltaje",
      desc: "Vout = Vin × (R2/(R1+R2))",
      icon: <Spline color={"#10b981" as any} size={24} />,
      href: "/voltage-divider",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-secondary p-4">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-bold text-white mb-2">ElectroCalc Pro</Text>
        <Text className="text-gray-400 text-lg">Tu caja de herramientas de ingeniería.</Text>
      </View>

      <View className="gap-4">
        {tools.map((tool) => (
          <Link key={tool.id} href={tool.href as any} asChild>
            <Pressable className="bg-slate-800/50 border border-slate-700 p-5 rounded-2xl flex-row items-center active:scale-95 transition-all">
              <View className="w-12 h-12 bg-slate-900 rounded-xl items-center justify-center mr-4 border border-slate-700/50">
                {tool.icon}
              </View>
              <View className="flex-1">
                <Text className="text-white text-xl font-semibold mb-1">{tool.title}</Text>
                <Text className="text-gray-400 text-sm">{tool.desc}</Text>
              </View>
              <ChevronRight color="#475569" size={20} />
            </Pressable>
          </Link>
        ))}
      </View>

      <View className="mt-12 bg-blue-500/10 border border-blue-500/20 p-6 rounded-3xl">
        <View className="flex-row items-center mb-3">
          <Info color={"#3b82f6" as any} size={20} className="mr-2" />
          <Text className="text-blue-400 font-bold text-lg">Tip Estudiantil</Text>
        </View>
        <Text className="text-blue-100/80 leading-6">
          ¿Sabías que la corriente siempre busca el camino de menor resistencia? 
          Usa estas calculadoras para validar tus prototipos antes de encender la fuente.
        </Text>
      </View>
    </ScrollView>
  );
}
