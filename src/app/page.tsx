"use client";
import Closed from "@/components/Closed";
import InProgress from "@/components/InProgress";
import Todo from "@/components/Todo";
import { useState } from "react";

export default function Home(): React.ReactElement {
  return (
    <main className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold">Todo Application</h1>
      <section className="flex gap-8 w-full">
        <Todo />
        <InProgress />
        <Closed />
      </section>
    </main>
  );
}
