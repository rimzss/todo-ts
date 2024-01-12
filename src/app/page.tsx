import Section from "@/components/section";

export default function Home(): React.ReactElement {
  return (
    <main className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold">Todo Application</h1>
      <Section/>
    </main>
  );
}
