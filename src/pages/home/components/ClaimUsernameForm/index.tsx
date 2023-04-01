import { Button, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "./styles";

const schemaClaimUsernameForm = z.object({
  username: z.string(),
});

type IClaimUsernameFormData = z.infer<typeof schemaClaimUsernameForm>;

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<IClaimUsernameFormData>();

  async function handleClaimUsername(data: IClaimUsernameFormData) {
    console.log(data);
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuário"
        {...register("username")}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  );
}
