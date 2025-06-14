// src/app/ayuda/page.tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function AyudaPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#003e9e] p-4">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <HelpCircle className="h-6 w-6 text-blue-600" />
            <CardTitle className="text-xl font-semibold text-gray-800">
              Centro de Ayuda
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">Problemas con tu tarjeta</h3>
            <p className="text-sm text-gray-600">
              Si tu tarjeta no es reconocida o tienes problemas al insertarla:
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Verifica que la tarjeta esté insertada correctamente</li>
              <li>Limpia la banda magnética con un paño suave</li>
              <li>Intenta nuevamente después de 30 segundos</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">Contacto inmediato</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>Línea de atención: (01) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <span>soporte@tu-banco.com</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-start">
          <Link href="/welcome">
            <Button variant="outline" className="text-blue-600 border-blue-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}