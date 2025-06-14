// app/welcome/page.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { HelpCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import bankLogo from "@/public/bank-logo.png";

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#003e9e] p-4">
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
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            Bienvenido al Cajero Automático
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            Por favor, inserte su tarjeta para comenzar
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Link href="/authentication" passHref>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Insertar tarjeta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <div className="flex justify-between items-center pt-4">
            <Select>
              <SelectTrigger className="w-[150px] border-gray-300">
                <SelectValue placeholder="Español" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
            
            <Link href="/ayuda">
            <Button variant="outline" className="text-blue-600 border-blue-300">
              <HelpCircle className="mr-2 h-4 w-4" />
              Ayuda
            </Button>
            </Link>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center">
          <p className="text-xs text-gray-500">
            Operaciones disponibles 24/7
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}