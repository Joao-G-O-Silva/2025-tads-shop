"use client";

import { criarMarca, MaraFormstate } from "@/actions/marca-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2Icon, SaveIcon } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

export function MarcasForm() {
  const initialState: MaraFormstate = {
    nome:'',
  }
  
  const [state,formAction,isPending] = useActionState(criarMarca,initialState)
  return (
    <section className="mt-8">
      <form action={formAction} className="max-w-2xl">
        <div className="space-y-4">
          <Label htmlFor="nome">Nome</Label>
          <Input name="nome" />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Link href="/cadastro/marcas">
            <Button variant="outline" type="button">
              Cancelar
            </Button>
          </Link>
          <Button type="submit">
            {isPending ? <Loader2Icon/> : <SaveIcon />}
            Salvar
          </Button>
        </div>
      </form>
    </section>
  );
}
