import { Button, TextInput, Text } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormAnnotation } from "./styles";
import { useRouter } from "next/router";

const schemaClaimUsernameForm = z.object({
  username: z
    .string()
    .min(3, { message: "O usuário precisa ter pelo menos 3 letras." })
    .regex(/^([a-z\\-]+)$/i, {
      message: "O usuário pode ter apenas letras e hifens.",
    })
    .transform((username) => username.toLowerCase()),
});

type IClaimUsernameFormData = z.infer<typeof schemaClaimUsernameForm>;

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IClaimUsernameFormData>({
    resolver: zodResolver(schemaClaimUsernameForm),
  });
  const router = useRouter();

  async function handleClaimUsername(data: IClaimUsernameFormData) {
    const { username } = data;

    router.push(`/register?username=${username}`);
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuário"
          {...register("username")}
        />
        <Button
          size="sm"
          type="submit"
          disabled={isSubmitting || !!errors.username}
        >
          Reservar
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : "Digite o nome do usuário desejado"}
        </Text>
      </FormAnnotation>
    </>
  );
}
