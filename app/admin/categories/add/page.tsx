'use client'

import { PhotoIcon, TagIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Fieldset, Legend, FieldGroup, Field, Label, Description } from '@/components/ui/fieldset'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Checkbox } from '@/components/ui/checkbox'
import { AdminLayout } from '@/components/admin-layout'

export default function AddCategoryPage() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Heading level={1}>إضافة فئة جديدة</Heading>
          <Text className="mt-2">
            أضف فئة جديدة إلى النظام مع جميع المعلومات المطلوبة.
          </Text>
        </div>

        <div className="divide-y divide-gray-900/10 dark:divide-zinc-700">
          {/* Category Information Section */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <Heading level={2}>معلومات الفئة</Heading>
              <Text className="mt-1">
                المعلومات الأساسية للفئة مثل الاسم والوصف.
              </Text>
            </div>

            <form className="bg-white dark:bg-zinc-900 shadow-xs ring-1 ring-gray-900/5 dark:ring-zinc-800 sm:rounded-xl md:col-span-2">
              <Fieldset className="px-4 py-6 sm:p-8">
                <FieldGroup className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <Field className="col-span-full">
                    <Label>اسم الفئة</Label>
                    <Input
                      name="category-name"
                      type="text"
                    />
                  </Field>

                  <Field className="col-span-full">
                    <Label>الرابط المختصر (Slug)</Label>
                    <Input
                      name="slug"
                      type="text"
                      placeholder="category-slug"
                    />
                    <Description>
                      سيتم استخدام هذا في الروابط. يجب أن يكون باللغة الإنجليزية وبدون مسافات.
                    </Description>
                  </Field>

                  <Field className="col-span-full">
                    <Label>وصف الفئة</Label>
                    <Textarea
                      name="description"
                      rows={3}
                      placeholder="اكتب وصفاً مختصراً عن الفئة..."
                    />
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>الفئة الأساسية</Label>
                    <Select name="parent-category">
                      <option value="">لا توجد (فئة رئيسية)</option>
                      <option value="electronics">إلكترونيات</option>
                      <option value="clothing">ملابس</option>
                      <option value="home">منزل وحديقة</option>
                      <option value="sports">رياضة</option>
                      <option value="books">كتب</option>
                    </Select>
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>الحالة</Label>
                    <Select name="status">
                      <option value="active">نشط</option>
                      <option value="inactive">غير نشط</option>
                      <option value="draft">مسودة</option>
                    </Select>
                  </Field>

                  <Field className="col-span-full">
                    <Label>أيقونة الفئة</Label>
                    <div className="mt-2 flex items-center gap-x-3">
                      <TagIcon aria-hidden="true" className="h-12 w-12 text-gray-300 dark:text-zinc-600" />
                      <Button type="button" outline>
                        رفع أيقونة
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

          {/* SEO Settings Section */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <Heading level={2}>إعدادات SEO</Heading>
              <Text className="mt-1">
                إعدادات تحسين محركات البحث للفئة.
              </Text>
            </div>

            <form className="bg-white dark:bg-zinc-900 shadow-xs ring-1 ring-gray-900/5 dark:ring-zinc-800 sm:rounded-xl md:col-span-2">
              <Fieldset className="px-4 py-6 sm:p-8">
                <FieldGroup className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <Field className="col-span-full">
                    <Label>عنوان الصفحة (Meta Title)</Label>
                    <Input
                      name="meta-title"
                      type="text"
                      maxLength={60}
                    />
                    <Description>
                      يُنصح بأن يكون أقل من 60 حرف.
                    </Description>
                  </Field>

                  <Field className="col-span-full">
                    <Label>وصف الصفحة (Meta Description)</Label>
                    <Textarea
                      name="meta-description"
                      rows={3}
                      maxLength={160}
                      placeholder="وصف مختصر للفئة يظهر في نتائج البحث..."
                    />
                    <Description>
                      يُنصح بأن يكون أقل من 160 حرف.
                    </Description>
                  </Field>

                  <Field className="col-span-full">
                    <Label>الكلمات المفتاحية</Label>
                    <Input
                      name="keywords"
                      type="text"
                      placeholder="كلمة مفتاحية، كلمة أخرى، كلمة ثالثة"
                    />
                    <Description>
                      افصل الكلمات المفتاحية بفاصلة.
                    </Description>
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>ترتيب العرض</Label>
                    <Input
                      name="sort-order"
                      type="number"
                      min="0"
                      defaultValue="0"
                    />
                  </Field>

                  <Fieldset className="sm:col-span-3">
                    <Legend>خيارات إضافية</Legend>
                    <FieldGroup className="mt-6 space-y-6">
                      <Field className="flex items-center gap-x-3">
                        <Checkbox
                          name="featured"
                        />
                        <Label>فئة مميزة</Label>
                      </Field>
                      <Field className="flex items-center gap-x-3">
                        <Checkbox
                          name="show-in-menu"
                          defaultChecked
                        />
                        <Label>إظهار في القائمة</Label>
                      </Field>
                    </FieldGroup>
                  </Fieldset>
                </FieldGroup>
              </Fieldset>
              <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 dark:border-zinc-700 px-4 py-4 sm:px-8">
                <Button type="button" outline>
                  إلغاء
                </Button>
                <Button type="submit">
                  حفظ الفئة
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}