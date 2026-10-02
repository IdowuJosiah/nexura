import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <Container className="text-center">
        <p className="font-display text-8xl text-gold-gradient">404</p>
        <h1 className="mt-6 font-display text-4xl font-light">This page doesn&apos;t exist.</h1>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/">Back home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
