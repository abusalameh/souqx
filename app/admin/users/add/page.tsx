'use client'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Fieldset, Legend, FieldGroup, Field, Label, Description } from '@/components/ui/fieldset'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { AdminLayout } from '@/components/admin-layout'

export default function AddUserPage() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Heading level={1}>إضافة مستخدم جديد</Heading>
          <Text className="mt-2">
            أضف مستخدم جديد إلى النظام مع جميع المعلومات المطلوبة.
          </Text>
        </div>

        <div className="divide-y divide-gray-900/10 dark:divide-zinc-700">
          {/* Basic Information Section */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <Heading level={2}>المعلومات الأساسية</Heading>
              <Text className="mt-1">
                المعلومات الأساسية للمستخدم مثل الاسم والبريد الإلكتروني.
              </Text>
            </div>

            <form className="bg-white dark:bg-zinc-900 shadow-xs ring-1 ring-gray-900/5 dark:ring-zinc-800 sm:rounded-xl md:col-span-2">
              <Fieldset className="px-4 py-6 sm:p-8">
                <FieldGroup className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <Field className="sm:col-span-3">
                    <Label>الاسم الأول</Label>
                    <Input
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                    />
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>اسم العائلة</Label>
                    <Input
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                    />
                  </Field>

                  <Field className="sm:col-span-4">
                    <Label>عنوان البريد الإلكتروني</Label>
                    <Input
                      name="email"
                      type="email"
                      autoComplete="email"
                    />
                  </Field>

                  <Field className="sm:col-span-2">
                    <Label>رقم الهاتف</Label>
                    <Input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                    />
                  </Field>

                  <Field className="col-span-full">
                    <Label>الصورة الشخصية</Label>
                    <div className="mt-2 flex items-center gap-x-3">
                      <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300 dark:text-zinc-600" />
                      <Button type="button" outline>
                        رفع صورة
                      </Button>
                    </div>
                  </Field>
                </FieldGroup>
              </Fieldset>
              <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 dark:border-zinc-700 px-4 py-4 sm:px-8">
                <Button type="button" outline>
                  إلغاء
                </Button>
                <Button type="submit">
                  التالي
                </Button>
              </div>
            </form>
          </div>

          {/* Account Settings Section */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <Heading level={2}>إعدادات الحساب</Heading>
              <Text className="mt-1">
                إعدادات الحساب والصلاحيات للمستخدم.
              </Text>
            </div>

            <form className="bg-white dark:bg-zinc-900 shadow-xs ring-1 ring-gray-900/5 dark:ring-zinc-800 sm:rounded-xl md:col-span-2">
              <Fieldset className="px-4 py-6 sm:p-8">
                <FieldGroup className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <Field className="sm:col-span-4">
                    <Label>اسم المستخدم</Label>
                    <Input
                      name="username"
                      type="text"
                      autoComplete="username"
                    />
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>الدور</Label>
                    <Select name="role">
                      <option value="user">مستخدم</option>
                      <option value="business_owner">صاحب عمل</option>
                      <option value="admin">مدير</option>
                    </Select>
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>الحالة</Label>
                    <Select name="status">
                      <option value="active">نشط</option>
                      <option value="inactive">غير نشط</option>
                      <option value="suspended">معلق</option>
                    </Select>
                  </Field>

                  <Field className="col-span-full">
                    <Label>كلمة المرور</Label>
                    <Input
                      name="password"
                      type="password"
                      autoComplete="new-password"
                    />
                  </Field>

                  <Field className="col-span-full">
                    <Label>تأكيد كلمة المرور</Label>
                    <Input
                      name="confirm-password"
                      type="password"
                      autoComplete="new-password"
                    />
                  </Field>
                </FieldGroup>
              </Fieldset>
              <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 dark:border-zinc-700 px-4 py-4 sm:px-8">
                <Button type="button" outline>
                  إلغاء
                </Button>
                <Button type="submit">
                  حفظ المستخدم
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}