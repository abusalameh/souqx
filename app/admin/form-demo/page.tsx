"use client";

import { AdminLayout } from "@/components/admin-layout";

import { Heading } from "@/components/ui/heading";
import FormLayoutExample from "@/typescript/src/components/form-layout-example";

export default function FormDemoPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <Heading>نموذج تخطيط النماذج</Heading>
        <p className="text-sm text-gray-600 dark:text-zinc-400">
          مثال شامل على تخطيط النماذج مع دعم RTL والمكونات المخصصة
        </p>

        <FormLayoutExample />
      </div>
    </AdminLayout>
  );
}
