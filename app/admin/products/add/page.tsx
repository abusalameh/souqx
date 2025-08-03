'use client'

import { PhotoIcon, CubeIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Fieldset, Legend, FieldGroup, Field, Label, Description } from '@/components/ui/fieldset'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Checkbox } from '@/components/ui/checkbox'
import { AdminLayout } from '@/components/admin-layout'

export default function AddProductPage() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Heading level={1}>إضافة منتج جديد</Heading>
          <Text className="mt-2">
            أضف منتج جديد إلى النظام مع جميع المعلومات المطلوبة.
          </Text>
        </div>

        <div className="divide-y divide-gray-900/10 dark:divide-zinc-700">
          {/* Product Information Section */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <Heading level={2}>معلومات المنتج</Heading>
              <Text className="mt-1">
                المعلومات الأساسية للمنتج مثل الاسم والوصف والفئة.
              </Text>
            </div>

            <form className="bg-white dark:bg-zinc-900 shadow-xs ring-1 ring-gray-900/5 dark:ring-zinc-800 sm:rounded-xl md:col-span-2">
              <Fieldset className="px-4 py-6 sm:p-8">
                <FieldGroup className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <Field className="col-span-full">
                    <Label>اسم المنتج</Label>
                    <Input
                      name="product-name"
                      type="text"
                    />
                  </Field>

                  <Field className="col-span-full">
                    <Label>رمز المنتج (SKU)</Label>
                    <Input
                      name="sku"
                      type="text"
                      placeholder="PROD-001"
                    />
                  </Field>

                  <Field className="col-span-full">
                    <Label>وصف المنتج</Label>
                    <Textarea
                      name="description"
                      rows={4}
                      placeholder="اكتب وصفاً تفصيلياً عن المنتج..."
                    />
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>الفئة</Label>
                    <Select name="category">
                      <option value="electronics">إلكترونيات</option>
                      <option value="clothing">ملابس</option>
                      <option value="home">منزل وحديقة</option>
                      <option value="sports">رياضة</option>
                      <option value="books">كتب</option>
                      <option value="beauty">جمال وعناية</option>
                    </Select>
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>العلامة التجارية</Label>
                    <Input
                      name="brand"
                      type="text"
                    />
                  </Field>

                  <Field className="col-span-full">
                    <Label>صور المنتج</Label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-zinc-700 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300 dark:text-zinc-600" />
                        <div className="mt-4 flex text-sm/6 text-gray-600 dark:text-zinc-400">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white dark:bg-zinc-900 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>رفع ملف</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple accept="image/*" />
                          </label>
                          <p className="pr-1">أو اسحب وأفلت</p>
                        </div>
                        <p className="text-xs/5 text-gray-600 dark:text-zinc-400">PNG, JPG, GIF حتى 10MB</p>
                      </div>
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

          {/* Pricing & Inventory Section */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <Heading level={2}>التسعير والمخزون</Heading>
              <Text className="mt-1">
                معلومات السعر والكمية المتوفرة في المخزون.
              </Text>
            </div>

            <form className="bg-white dark:bg-zinc-900 shadow-xs ring-1 ring-gray-900/5 dark:ring-zinc-800 sm:rounded-xl md:col-span-2">
              <Fieldset className="px-4 py-6 sm:p-8">
                <FieldGroup className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <Field className="sm:col-span-3">
                    <Label>السعر (ريال سعودي)</Label>
                    <Input
                      name="price"
                      type="number"
                      step="0.01"
                      min="0"
                    />
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>سعر التخفيض (اختياري)</Label>
                    <Input
                      name="sale-price"
                      type="number"
                      step="0.01"
                      min="0"
                    />
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>الكمية في المخزون</Label>
                    <Input
                      name="stock-quantity"
                      type="number"
                      min="0"
                    />
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>حد التنبيه للمخزون المنخفض</Label>
                    <Input
                      name="low-stock-threshold"
                      type="number"
                      min="0"
                      defaultValue="5"
                    />
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>الوزن (كيلوجرام)</Label>
                    <Input
                      name="weight"
                      type="number"
                      step="0.01"
                      min="0"
                    />
                  </Field>

                  <Field className="sm:col-span-3">
                    <Label>حالة المنتج</Label>
                    <Select name="status">
                      <option value="active">نشط</option>
                      <option value="inactive">غير نشط</option>
                      <option value="draft">مسودة</option>
                      <option value="out-of-stock">نفد من المخزون</option>
                    </Select>
                  </Field>

                  <Fieldset className="col-span-full">
                    <Legend>خيارات المنتج</Legend>
                    <FieldGroup className="mt-6 space-y-6">
                      <Field className="flex items-center gap-x-3">
                        <Checkbox
                          name="track-inventory"
                          defaultChecked
                        />
                        <Label>تتبع المخزون</Label>
                      </Field>
                      <Field className="flex items-center gap-x-3">
                        <Checkbox
                          name="allow-backorders"
                        />
                        <Label>السماح بالطلبات المسبقة</Label>
                      </Field>
                      <Field className="flex items-center gap-x-3">
                        <Checkbox
                          name="featured"
                        />
                        <Label>منتج مميز</Label>
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
                  حفظ المنتج
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}