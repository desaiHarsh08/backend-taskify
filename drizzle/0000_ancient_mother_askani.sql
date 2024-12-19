-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "activity_logs" (
	"id" bigint,
	"action_type" text,
	"created_at" timestamp,
	"resource_type" text,
	"updated_at" timestamp,
	"column_instance_id_fk" text,
	"field_instance_id_fk" double precision,
	"function_instance_id_fk" double precision,
	"task_instance_id_fk" double precision,
	"user_id_fk" bigint
);
--> statement-breakpoint
CREATE TABLE "col_table_instances" (
	"id" bigint,
	"boolean_value" text,
	"created_at" timestamp,
	"date_value" timestamp,
	"number_value" bigint,
	"text_value" text,
	"updated_at" timestamp,
	"row_table_instance_id_fk" bigint
);
--> statement-breakpoint
CREATE TABLE "column_instances" (
	"id" bigint,
	"boolean_value" bigint,
	"created_at" timestamp,
	"date_value" timestamp,
	"number_value" double precision,
	"text_value" text,
	"updated_at" timestamp,
	"column_template_id_fk" bigint,
	"dropdown_template_id_fk" double precision,
	"field_instance_id_fk" bigint
);
--> statement-breakpoint
CREATE TABLE "column_metadata_templates" (
	"id" bigint,
	"accept_multiple_files" bigint,
	"created_at" timestamp,
	"type" text,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "column_templates" (
	"id" bigint,
	"created_at" timestamp,
	"name" text,
	"updated_at" timestamp,
	"column_metadata_template" bigint
);
--> statement-breakpoint
CREATE TABLE "column_variant_instances" (
	"id" bigint,
	"boolean_value" bigint,
	"created_at" timestamp,
	"date_value" timestamp,
	"number_value" bigint,
	"text_value" text,
	"updated_at" timestamp,
	"column_instance_id_fk" bigint,
	"column_variant_template_id_fk" bigint
);
--> statement-breakpoint
CREATE TABLE "column_variant_templates" (
	"id" bigint,
	"created_at" timestamp,
	"name" text,
	"updated_at" timestamp,
	"value_type" text,
	"column_template_id" bigint,
	"targeted_value" text
);
--> statement-breakpoint
CREATE TABLE "customers" (
	"id" bigint,
	"address" text,
	"anniversary_date" timestamp,
	"birth_date" timestamp,
	"city" text,
	"email" text,
	"name" text,
	"person_of_contact" text,
	"phone" text,
	"pincode" text,
	"residence_address" text,
	"state" text,
	"parent_company_id_fk" double precision,
	"gst" text
);
--> statement-breakpoint
CREATE TABLE "departments" (
	"id" bigint,
	"created_at" timestamp,
	"name" text,
	"updated_at" timestamp,
	"user_id" bigint
);
--> statement-breakpoint
CREATE TABLE "departments_roles" (
	"department_id" bigint,
	"role_id" bigint
);
--> statement-breakpoint
CREATE TABLE "dropdown_templates" (
	"id" bigint,
	"created_at" timestamp,
	"group_name" text,
	"level" text,
	"updated_at" timestamp,
	"value" text,
	"column_template_id_fk" double precision,
	"function_template_id_fk" double precision,
	"task_template_id_fk" text
);
--> statement-breakpoint
CREATE TABLE "field_instances" (
	"id" bigint,
	"closed_at" timestamp,
	"created_at" timestamp,
	"updated_at" timestamp,
	"closed_by_user_id_fk" double precision,
	"created_by_user_id_fk" bigint,
	"field_template_id_fk" bigint,
	"function_instance_id_fk" bigint
);
--> statement-breakpoint
CREATE TABLE "field_templates" (
	"id" bigint,
	"created_at" timestamp,
	"description" text,
	"title" text,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "field_templates_column_templates" (
	"field_template_id" bigint,
	"column_template_id" bigint
);
--> statement-breakpoint
CREATE TABLE "function_instances" (
	"id" bigint,
	"closed_at" timestamp,
	"created_at" timestamp,
	"due_date" timestamp,
	"remarks" text,
	"updated_at" timestamp,
	"closed_by_user_id_fk" double precision,
	"created_by_user_id_fk" bigint,
	"dropdown_template_id_fk" double precision,
	"function_template_id_fk" bigint,
	"task_instances_id_fk" bigint
);
--> statement-breakpoint
CREATE TABLE "function_templates" (
	"id" bigint,
	"created_at" timestamp,
	"department" text,
	"description" text,
	"is_choice" bigint,
	"title" text,
	"type" text,
	"updated_at" timestamp,
	"next_follow_up_function_template_id_fk" double precision
);
--> statement-breakpoint
CREATE TABLE "function_templates_field_templates" (
	"function_template_id" bigint,
	"field_template_id" bigint
);
--> statement-breakpoint
CREATE TABLE "next_follow_up_column_templates" (
	"id" bigint,
	"column_template_id_fk" double precision,
	"next_follow_up_column_template_id_fk" bigint,
	"column_variant_template_id_fk" double precision
);
--> statement-breakpoint
CREATE TABLE "parent_companies" (
	"id" bigint,
	"business_type" text,
	"city" text,
	"email" text,
	"head_office_address" text,
	"name" text,
	"person_of_contact" text,
	"phone" text,
	"pincode" text,
	"remark" text,
	"state" text,
	"address" text
);
--> statement-breakpoint
CREATE TABLE "refresh_tokens" (
	"id" bigint,
	"email" text,
	"expiry_time" timestamp,
	"refresh_token" text
);
--> statement-breakpoint
CREATE TABLE "roles" (
	"id" bigint,
	"created_at" timestamp,
	"type" text,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "row_table_instances" (
	"id" bigint,
	"created_at" timestamp,
	"updated_at" timestamp,
	"column_instance_id_fk" bigint
);
--> statement-breakpoint
CREATE TABLE "task_instances" (
	"id" bigint,
	"abbreviation" text,
	"closed_at" timestamp,
	"created_at" timestamp,
	"is_archived" bigint,
	"priority_type" text,
	"problem_description" text,
	"pump_manufacturer" text,
	"pump_type" text,
	"requirements" text,
	"specifications" text,
	"updated_at" timestamp,
	"assigned_to_user_id_fk" bigint,
	"closed_by_user_id_fk" double precision,
	"created_by_user_id_fk" bigint,
	"customer_id_fk" bigint,
	"dropdown_template_id_fk" text,
	"task_template_id_fk" bigint
);
--> statement-breakpoint
CREATE TABLE "task_templates" (
	"id" bigint,
	"created_at" timestamp,
	"title" text,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "task_templates_function_templates" (
	"task_template_id" bigint,
	"function_template_id" bigint
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" bigint,
	"created_at" timestamp,
	"disabled" bigint,
	"email" text,
	"is_admin" bigint,
	"name" text,
	"password" text,
	"phone" text,
	"profile_image" text,
	"updated_at" timestamp
);

*/