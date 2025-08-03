import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { relations } from 'drizzle-orm';

// Business types table
export const businessTypes = sqliteTable('business_types', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  icon: text('icon'),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

// Default categories table
export const defaultCategories = sqliteTable('default_categories', {
  id: text('id').primaryKey(),
  businessTypeId: text('business_type_id').notNull().references(() => businessTypes.id),
  name: text('name').notNull(),
  description: text('description'),
  image: text('image'),
  sortOrder: integer('sort_order').notNull().default(0),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

// Users table
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  phone: text('phone'),
  avatar: text('avatar'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

// Businesses table
export const businesses = sqliteTable('businesses', {
  id: text('id').primaryKey(),
  ownerId: text('owner_id').notNull().references(() => users.id),
  businessTypeId: text('business_type_id').notNull().references(() => businessTypes.id),
  name: text('name').notNull(),
  description: text('description'),
  logo: text('logo'),
  coverImage: text('cover_image'),
  phone: text('phone'),
  address: text('address'),
  city: text('city'),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

// Categories table
export const categories = sqliteTable('categories', {
  id: text('id').primaryKey(),
  businessId: text('business_id').notNull().references(() => businesses.id),
  defaultCategoryId: text('default_category_id').references(() => defaultCategories.id), // Reference to default category if created from template
  name: text('name').notNull(),
  description: text('description'),
  image: text('image'),
  sortOrder: integer('sort_order').notNull().default(0),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  isCustom: integer('is_custom', { mode: 'boolean' }).notNull().default(false), // true if custom, false if from default
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

// Products table
export const products = sqliteTable('products', {
  id: text('id').primaryKey(),
  businessId: text('business_id').notNull().references(() => businesses.id),
  categoryId: text('category_id').references(() => categories.id),
  name: text('name').notNull(),
  description: text('description'),
  price: real('price').notNull(),
  discountPrice: real('discount_price'),
  images: text('images'), // JSON array of image URLs
  stock: integer('stock').notNull().default(0),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

// Bundles table
export const bundles = sqliteTable('bundles', {
  id: text('id').primaryKey(),
  businessId: text('business_id').notNull().references(() => businesses.id),
  name: text('name').notNull(),
  description: text('description'),
  price: real('price').notNull(),
  discountPrice: real('discount_price'),
  image: text('image'),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

// Bundle items table (many-to-many relationship between bundles and products)
export const bundleItems = sqliteTable('bundle_items', {
  id: text('id').primaryKey(),
  bundleId: text('bundle_id').notNull().references(() => bundles.id),
  productId: text('product_id').notNull().references(() => products.id),
  quantity: integer('quantity').notNull().default(1),
});

// Orders table
export const orders = sqliteTable('orders', {
  id: text('id').primaryKey(),
  businessId: text('business_id').notNull().references(() => businesses.id),
  customerName: text('customer_name').notNull(),
  customerPhone: text('customer_phone').notNull(),
  customerAddress: text('customer_address'),
  totalAmount: real('total_amount').notNull(),
  status: text('status').notNull().default('pending'), // pending, confirmed, preparing, ready, delivered, cancelled
  notes: text('notes'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

// Order items table
export const orderItems = sqliteTable('order_items', {
  id: text('id').primaryKey(),
  orderId: text('order_id').notNull().references(() => orders.id),
  productId: text('product_id').references(() => products.id),
  bundleId: text('bundle_id').references(() => bundles.id),
  name: text('name').notNull(), // Store name at time of order
  price: real('price').notNull(), // Store price at time of order
  quantity: integer('quantity').notNull(),
});

// Relations
export const businessTypesRelations = relations(businessTypes, ({ many }) => ({
  businesses: many(businesses),
  defaultCategories: many(defaultCategories),
}));

export const defaultCategoriesRelations = relations(defaultCategories, ({ one, many }) => ({
  businessType: one(businessTypes, {
    fields: [defaultCategories.businessTypeId],
    references: [businessTypes.id],
  }),
  categories: many(categories),
}));

export const usersRelations = relations(users, ({ many }) => ({
  businesses: many(businesses),
}));

export const businessesRelations = relations(businesses, ({ one, many }) => ({
  owner: one(users, {
    fields: [businesses.ownerId],
    references: [users.id],
  }),
  businessType: one(businessTypes, {
    fields: [businesses.businessTypeId],
    references: [businessTypes.id],
  }),
  categories: many(categories),
  products: many(products),
  bundles: many(bundles),
  orders: many(orders),
}));

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  business: one(businesses, {
    fields: [categories.businessId],
    references: [businesses.id],
  }),
  defaultCategory: one(defaultCategories, {
    fields: [categories.defaultCategoryId],
    references: [defaultCategories.id],
  }),
  products: many(products),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  business: one(businesses, {
    fields: [products.businessId],
    references: [businesses.id],
  }),
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  bundleItems: many(bundleItems),
  orderItems: many(orderItems),
}));

export const bundlesRelations = relations(bundles, ({ one, many }) => ({
  business: one(businesses, {
    fields: [bundles.businessId],
    references: [businesses.id],
  }),
  bundleItems: many(bundleItems),
  orderItems: many(orderItems),
}));

export const bundleItemsRelations = relations(bundleItems, ({ one }) => ({
  bundle: one(bundles, {
    fields: [bundleItems.bundleId],
    references: [bundles.id],
  }),
  product: one(products, {
    fields: [bundleItems.productId],
    references: [products.id],
  }),
}));

export const ordersRelations = relations(orders, ({ one, many }) => ({
  business: one(businesses, {
    fields: [orders.businessId],
    references: [businesses.id],
  }),
  orderItems: many(orderItems),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id],
  }),
  product: one(products, {
    fields: [orderItems.productId],
    references: [products.id],
  }),
  bundle: one(bundles, {
    fields: [orderItems.bundleId],
    references: [bundles.id],
  }),
}));

// Zod schemas for validation
export const insertBusinessTypeSchema = createInsertSchema(businessTypes);
export const selectBusinessTypeSchema = createSelectSchema(businessTypes);

export const insertDefaultCategorySchema = createInsertSchema(defaultCategories);
export const selectDefaultCategorySchema = createSelectSchema(defaultCategories);

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export const insertBusinessSchema = createInsertSchema(businesses);
export const selectBusinessSchema = createSelectSchema(businesses);

export const insertCategorySchema = createInsertSchema(categories);
export const selectCategorySchema = createSelectSchema(categories);

export const insertProductSchema = createInsertSchema(products);
export const selectProductSchema = createSelectSchema(products);

export const insertBundleSchema = createInsertSchema(bundles);
export const selectBundleSchema = createSelectSchema(bundles);

export const insertOrderSchema = createInsertSchema(orders);
export const selectOrderSchema = createSelectSchema(orders);

export type BusinessType = typeof businessTypes.$inferSelect;
export type NewBusinessType = typeof businessTypes.$inferInsert;

export type DefaultCategory = typeof defaultCategories.$inferSelect;
export type NewDefaultCategory = typeof defaultCategories.$inferInsert;

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Business = typeof businesses.$inferSelect;
export type NewBusiness = typeof businesses.$inferInsert;

export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;

export type Bundle = typeof bundles.$inferSelect;
export type NewBundle = typeof bundles.$inferInsert;

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;