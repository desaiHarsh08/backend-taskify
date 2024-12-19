import { pgTable, bigint, text, timestamp, doublePrecision } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const activityLogs = pgTable("activity_logs", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	actionType: text("action_type"),
	createdAt: timestamp("created_at", { mode: 'string' }),
	resourceType: text("resource_type"),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	columnInstanceIdFk: text("column_instance_id_fk"),
	fieldInstanceIdFk: doublePrecision("field_instance_id_fk"),
	functionInstanceIdFk: doublePrecision("function_instance_id_fk"),
	taskInstanceIdFk: doublePrecision("task_instance_id_fk"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	userIdFk: bigint("user_id_fk", { mode: "number" }),
});

export const colTableInstances = pgTable("col_table_instances", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	booleanValue: text("boolean_value"),
	createdAt: timestamp("created_at", { mode: 'string' }),
	dateValue: timestamp("date_value", { mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	numberValue: bigint("number_value", { mode: "number" }),
	textValue: text("text_value"),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	rowTableInstanceIdFk: bigint("row_table_instance_id_fk", { mode: "number" }),
});

export const columnInstances = pgTable("column_instances", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	booleanValue: bigint("boolean_value", { mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	dateValue: timestamp("date_value", { mode: 'string' }),
	numberValue: doublePrecision("number_value"),
	textValue: text("text_value"),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	columnTemplateIdFk: bigint("column_template_id_fk", { mode: "number" }),
	dropdownTemplateIdFk: doublePrecision("dropdown_template_id_fk"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	fieldInstanceIdFk: bigint("field_instance_id_fk", { mode: "number" }),
});

export const columnMetadataTemplates = pgTable("column_metadata_templates", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	acceptMultipleFiles: bigint("accept_multiple_files", { mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	type: text(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
});

export const columnTemplates = pgTable("column_templates", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	name: text(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	columnMetadataTemplate: bigint("column_metadata_template", { mode: "number" }),
});

export const columnVariantInstances = pgTable("column_variant_instances", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	booleanValue: bigint("boolean_value", { mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	dateValue: timestamp("date_value", { mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	numberValue: bigint("number_value", { mode: "number" }),
	textValue: text("text_value"),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	columnInstanceIdFk: bigint("column_instance_id_fk", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	columnVariantTemplateIdFk: bigint("column_variant_template_id_fk", { mode: "number" }),
});

export const columnVariantTemplates = pgTable("column_variant_templates", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	name: text(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	valueType: text("value_type"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	columnTemplateId: bigint("column_template_id", { mode: "number" }),
	targetedValue: text("targeted_value"),
});

export const customers = pgTable("customers", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	address: text(),
	anniversaryDate: timestamp("anniversary_date", { mode: 'string' }),
	birthDate: timestamp("birth_date", { mode: 'string' }),
	city: text(),
	email: text(),
	name: text(),
	personOfContact: text("person_of_contact"),
	phone: text(),
	pincode: text(),
	residenceAddress: text("residence_address"),
	state: text(),
	parentCompanyIdFk: doublePrecision("parent_company_id_fk"),
	gst: text(),
});

export const departments = pgTable("departments", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	name: text(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	userId: bigint("user_id", { mode: "number" }),
});

export const departmentsRoles = pgTable("departments_roles", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	departmentId: bigint("department_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	roleId: bigint("role_id", { mode: "number" }),
});

export const dropdownTemplates = pgTable("dropdown_templates", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	groupName: text("group_name"),
	level: text(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	value: text(),
	columnTemplateIdFk: doublePrecision("column_template_id_fk"),
	functionTemplateIdFk: doublePrecision("function_template_id_fk"),
	taskTemplateIdFk: text("task_template_id_fk"),
});

export const fieldInstances = pgTable("field_instances", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	closedAt: timestamp("closed_at", { mode: 'string' }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	closedByUserIdFk: doublePrecision("closed_by_user_id_fk"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	createdByUserIdFk: bigint("created_by_user_id_fk", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	fieldTemplateIdFk: bigint("field_template_id_fk", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	functionInstanceIdFk: bigint("function_instance_id_fk", { mode: "number" }),
});

export const fieldTemplates = pgTable("field_templates", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	description: text(),
	title: text(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
});

export const fieldTemplatesColumnTemplates = pgTable("field_templates_column_templates", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	fieldTemplateId: bigint("field_template_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	columnTemplateId: bigint("column_template_id", { mode: "number" }),
});

export const functionInstances = pgTable("function_instances", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	closedAt: timestamp("closed_at", { mode: 'string' }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	dueDate: timestamp("due_date", { mode: 'string' }),
	remarks: text(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	closedByUserIdFk: doublePrecision("closed_by_user_id_fk"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	createdByUserIdFk: bigint("created_by_user_id_fk", { mode: "number" }),
	dropdownTemplateIdFk: doublePrecision("dropdown_template_id_fk"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	functionTemplateIdFk: bigint("function_template_id_fk", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	taskInstancesIdFk: bigint("task_instances_id_fk", { mode: "number" }),
});

export const functionTemplates = pgTable("function_templates", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	department: text(),
	description: text(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	isChoice: bigint("is_choice", { mode: "number" }),
	title: text(),
	type: text(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	nextFollowUpFunctionTemplateIdFk: doublePrecision("next_follow_up_function_template_id_fk"),
});

export const functionTemplatesFieldTemplates = pgTable("function_templates_field_templates", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	functionTemplateId: bigint("function_template_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	fieldTemplateId: bigint("field_template_id", { mode: "number" }),
});

export const nextFollowUpColumnTemplates = pgTable("next_follow_up_column_templates", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	columnTemplateIdFk: doublePrecision("column_template_id_fk"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	nextFollowUpColumnTemplateIdFk: bigint("next_follow_up_column_template_id_fk", { mode: "number" }),
	columnVariantTemplateIdFk: doublePrecision("column_variant_template_id_fk"),
});

export const parentCompanies = pgTable("parent_companies", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	businessType: text("business_type"),
	city: text(),
	email: text(),
	headOfficeAddress: text("head_office_address"),
	name: text(),
	personOfContact: text("person_of_contact"),
	phone: text(),
	pincode: text(),
	remark: text(),
	state: text(),
	address: text(),
});

export const refreshTokens = pgTable("refresh_tokens", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	email: text(),
	expiryTime: timestamp("expiry_time", { mode: 'string' }),
	refreshToken: text("refresh_token"),
});

export const roles = pgTable("roles", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	type: text(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
});

export const rowTableInstances = pgTable("row_table_instances", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	columnInstanceIdFk: bigint("column_instance_id_fk", { mode: "number" }),
});

export const taskInstances = pgTable("task_instances", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	abbreviation: text(),
	closedAt: timestamp("closed_at", { mode: 'string' }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	isArchived: bigint("is_archived", { mode: "number" }),
	priorityType: text("priority_type"),
	problemDescription: text("problem_description"),
	pumpManufacturer: text("pump_manufacturer"),
	pumpType: text("pump_type"),
	requirements: text(),
	specifications: text(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	assignedToUserIdFk: bigint("assigned_to_user_id_fk", { mode: "number" }),
	closedByUserIdFk: doublePrecision("closed_by_user_id_fk"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	createdByUserIdFk: bigint("created_by_user_id_fk", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	customerIdFk: bigint("customer_id_fk", { mode: "number" }),
	dropdownTemplateIdFk: text("dropdown_template_id_fk"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	taskTemplateIdFk: bigint("task_template_id_fk", { mode: "number" }),
});

export const taskTemplates = pgTable("task_templates", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	title: text(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
});

export const taskTemplatesFunctionTemplates = pgTable("task_templates_function_templates", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	taskTemplateId: bigint("task_template_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	functionTemplateId: bigint("function_template_id", { mode: "number" }),
});

export const users = pgTable("users", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	disabled: bigint({ mode: "number" }),
	email: text(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	isAdmin: bigint("is_admin", { mode: "number" }),
	name: text(),
	password: text(),
	phone: text(),
	profileImage: text("profile_image"),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
});
