'use client'

import { PhotoIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Fieldset, Legend, FieldGroup, Field, Label, Description } from '@/components/ui/fieldset'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { AdminLayout } from '@/components/admin-layout'

export default function AddBusinessPage() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Heading level={1}>إضافة عمل تجاري جديد</Heading>
          <Text className="mt-2">
            أضف عمل تجاري جديد إلى النظام مع جميع المعلومات المطلوبة.
          </Text>
        </div>

        <div className="divide-y divide-gray-900/10 dark:divide-zinc-700">
          {/* Business Information Section */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <Heading level={2}>معلومات العمل التجاري</Heading>
              <Text className="mt-1">
                المعلومات الأساسية للعمل التجاري مثل الاسم والوصف.
              </Text>
            </div>

            <form className="bg-white dark:bg-zinc-900 shadow-xs ring-1 ring-gray-900/5 dark:ring-zinc-800 sm:rounded-xl md:col-span-2">
              <Fieldset className="px-4 py-6 sm:p-8">
                <FieldGroup className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <Field className="col-span-full">
                    <Label>اسم العمل التجاري</Label>
                    <Input
                      name="business-name"
                      type="text"
                    />
                  </Field>

                  <Field className="col-span-full">
                    <Label>وصف العمل التجاري</Label>
                    <Textarea
                      name="description"
                      rows={3}
                      placeholder="اكتب وصفاً مختصراً عن العمل التجاري..."
                    />
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>الفئة</Label>
                    <Select name="category">
                      <option value="restaurant">مطعم</option>
                      <option value="retail">تجارة تجزئة</option>
                      <option value="services">خدمات</option>
                      <option value="technology">تكنولوجيا</option>
                      <option value="healthcare">رعاية صحية</option>
                      <option value="education">تعليم</option>
                    </Select>
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>الحالة</Label>
                    <Select name="status">
                      <option value="active">نشط</option>
                      <option value="pending">في الانتظار</option>
                      <option value="suspended">معلق</option>
                      <option value="closed">مغلق</option>
                    </Select>
                  </Field>

                  <Field className="col-span-full">
                    <Label>شعار العمل التجاري</Label>
                    <div className="mt-2 flex items-center gap-x-3">
                      <BuildingStorefrontIcon aria-hidden="true" className="h-12 w-12 text-gray-300 dark:text-zinc-600" />
                      <Button type="button" outline>
                        رفع شعار
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

          {/* Contact Information Section */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <Heading level={2}>معلومات الاتصال</Heading>
              <Text className="mt-1">
                معلومات الاتصال والعنوان للعمل التجاري.
              </Text>
            </div>

            <form className="bg-white dark:bg-zinc-900 shadow-xs ring-1 ring-gray-900/5 dark:ring-zinc-800 sm:rounded-xl md:col-span-2">
              <Fieldset className="px-4 py-6 sm:p-8">
                <FieldGroup className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <Field className="sm:col-span-3">
                    <Label>رقم الهاتف</Label>
                    <Input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                    />
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>البريد الإلكتروني</Label>
                    <Input
                      name="email"
                      type="email"
                      autoComplete="email"
                    />
                  </Field>

                  <Field className="col-span-full">
                    <Label>العنوان</Label>
                    <Input
                      name="address"
                      type="text"
                      autoComplete="street-address"
                    />
                  </Field>

                  <Field className="sm:col-span-2">
                    <Label>المدينة</Label>
                    <Input
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                    />
                  </Field>

                  <Field className="sm:col-span-2">
                    <Label>المنطقة</Label>
                    <Input
                      name="state"
                      type="text"
                      autoComplete="address-level1"
                    />
                  </Field>

                  <Field className="sm:col-span-2">
                    <Label>الرمز البريدي</Label>
                    <Input
                      name="postal-code"
                      type="text"
                      autoComplete="postal-code"
                    />
                  </Field>

                  <Field className="col-span-full">
                    <Label>الموقع الإلكتروني</Label>
                    <Input
                      name="website"
                      type="url"
                      placeholder="https://example.com"
                    />
                  </Field>
                </FieldGroup>
              </Fieldset>
              <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 dark:border-zinc-700 px-4 py-4 sm:px-8">
                <Button type="button" outline>
                  إلغاء
                </Button>
                <Button type="submit">
                  حفظ العمل التجاري
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}