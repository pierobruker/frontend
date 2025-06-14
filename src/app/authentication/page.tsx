// app/authentication/page.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ArrowRight, HelpCircle, Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AuthenticationScreen() {
  const [pin, setPin] = useState("");

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Solo permitir números y máximo 4 dígitos
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setPin(value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#003e9e] p-4">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader className="items-center space-y-4">
          <div className="flex items-center justify-center rounded-full bg-blue-100 p-3">
            <Lock className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            Autenticación
          </CardTitle>
          <div className="flex items-center text-sm text-blue-600">
            <Shield className="mr-1 h-4 w-4" />
            <span>Sistema seguro</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
              Ingrese su PIN
            </label>
            <Input
              id="pin"
              type="password"
              value={pin}
              onChange={handlePinChange}
              placeholder="••••"
              maxLength={4}
              className="text-center text-2xl tracking-widest h-12"
            />
          </div>

          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={pin.length !== 4}
          >
            Ingresar PIN
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>

        <CardFooter className="flex flex-col items-center space-y-2">
          <Link 
            href="/recover-pin" 
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            <HelpCircle className="inline mr-1 h-4 w-4" />
            Olvidé mi PIN
          </Link>
          
          <div className="text-xs text-gray-500 mt-4">
            <p>Por seguridad, no compartas tu PIN con nadie</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}