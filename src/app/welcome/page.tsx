// app/welcome/page.tsx
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { HelpCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import bankLogo from "@/public/bank-logo.png"; // Asegúrate de tener tu logo en la carpeta public

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader className="items-center space-y-4">
           <div className="rounded-full bg-blue-50 p-4">
          <Image
            src={bankLogo}
            alt="Logo del Banco"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Bienvenido al Cajero Automático
          </CardTitle>
          <CardDescription className="text-center">
            Por favor, inserte su tarjeta para comenzar
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Button 
            size="lg"
            className="w-full flex items-center justify-between"
          >
            Insertar tarjeta
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="flex justify-between items-center mt-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Español" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="ghost" size="sm">
              <HelpCircle className="mr-2 h-4 w-4" />
              Ayuda
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center">
          <p className="text-xs text-muted-foreground">
            Operaciones disponibles 24/7
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}