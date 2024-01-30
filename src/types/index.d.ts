import { Moment } from 'moment';
import { ROUTE } from '@/common/constants/route';
import { ReactNode } from 'react';
import { ILocation, IModel, ITrackHourStatus } from './app';
import dayjs, { Dayjs } from 'dayjs';
import { IDevice } from '@/stores/dimensions';

export namespace AppTypes {
  export type IFile = Partial<FileWithPath> & IAttachment;
  export type IRole = 'freelancer' | 'client' | 'guest';

  export type IMediaType = 'video' | 'image' | 'audio' | 'text';

  export type ICourierType = 'jt_vietnam' | 'ghn' | 'grab';

  export type ITransactionType = 'paid' | 'top_up';

  export type IProjectAgreememtType = 'custom' | 'zalow';

  export type IConnectionType = 'github' | 'google';

  export type IConnectionHierarchyType = '1st' | '2nd' | '3rd' | 'out_of_network';

  export type IMilestoneStatus =
    | 'open'
    | 'closed'
    | 'pending_review'
    | 'approved'
    | 'on_process'
    | 'completed'
    | 'request_changed'
    | 'approve_delivery'
    | 'deposited';

  export type IWorkType = 'full_time' | 'part_time';
  export type ILocationWorkType = 'remote' | 'onsite' | 'hybrid';
  export type IProjectMode = 'public' | 'private';
  export type IApplicationStatus =
    | 'requested_from_freelancer'
    | 'requested_from_client'
    | 'accepted_by_client'
    | 'rejected_by_client'
    | 'accepted_by_freelancer'
    | 'rejected_by_freelancer'
    | 'invited_by_client'
    | 'unapplied_by_freelancer'
    | 'accepted_offer_by_freelancer'
    | 'completed'
    | 'offer_client_signing_contract_status'
    | 'signing_offer';

  export type IOrderStatus =
    | 'new'
    | 'pending'
    | 'ready_to_ship'
    | 'in_transit'
    | 'returned'
    | 'delivered'
    | 'cancelled'
    | 'lost'
    | 'success'
    | 'damaged';

  export type ITransactionStatus = 'package_created' | 'package_refunded' | 'top_up' | 'cod_collection';

  export type IFacilityUserStatus = 'available' | 'blocked';

  export type IUserAddressType = 'primary' | 'billing_address' | 'work_site' | 'personal_approval' | 'contact';

  export type ICountryCode = 'VN';

  // NEW
  export type ISubscriptionPlanType = 'Free' | 'Basic Monthly' | 'Basic Annual' | 'Premium Monthly' | 'Premium Annual';
  export type ISubscriptionPlanName = 'Free Plan' | 'Basic Plan' | 'Premium Plan';
  export type IUserDeviceStatus = 'Active';
  export type IPlatform = 'ios' | 'android';
  export type IProjectStatus =
    // Admin need to preview (these statuses set by admin)
    | 'pending'
    | 'rejected'
    | 'approved'

    // After project was approved by admin
    | 'closed' // project is closed by some reasons
    | 'open' // project is open for freelancer to apply
    | 'recruited' // hired freelancer
    | 'completed'
    | 'suspended'
    | 'active';

  export type ILocationWorkType = 'remote' | 'onsite' | 'hybrid';
  export type IFeeType = 'milestone' | 'hourly';
  export type IExperienceLevel = 'junior' | 'mid_level' | 'senior';

  export type IUserApplicationStatus =
    | 'requested_from_freelancer'
    | 'requested_from_client'
    | 'accepted_by_client'
    | 'rejected_by_client'
    | 'accepted_by_freelancer'
    | 'rejected_by_freelancer'
    | 'invited_by_client'
    | 'unapplied_by_freelancer';

  export type IChatMessageType = 'user' | 'group';
  export type IProjectMilestoneStatus =
    | 'pending_review'
    | 'open'
    | 'on_process'
    | 'completed'
    | 'closed'
    | 'approve_delivery'
    | 'approved'
    | 'request_changed'
    | 'deposited';
  export type ILanguageName = 'english' | 'spanish';
  export type ILanguageSkill = 'spoken' | 'written';
  export type ILanguageCompetency =
    | 'any_level'
    | 'conversational_or_better'
    | 'fluent_or_better'
    | 'native_or_bilingual_only';
  export type IJobCompetency = 'beginner' | 'intermediate' | 'advanced';
  export type IPersonalityAssessment = 'disc' | 'mbti' | 'others';
  export type IWorkTime = 'full_time' | 'part_time';
  export type ICompanyRole = 'project_owner';
  export type ITransactionType = 'paid' | 'top_up';
  export type IOfferStatus =
    | 'pending'
    | 'sent_to_company'
    | 'accepted_by_company'
    | 'sent_to_freelancer'
    | 'accepted_by_freelancer'
    | 'completed'
    | 'expired'
    | 'shortlisted'
    | 'invited'
    | 'archived'
    | 'rejected_by_freelancer';

  export type ICategory = '' | 'cyber_security_expert' | 'customer_service' | 'it_and_networking';
  export type IWhoCanSee = 'all' | 'just_connection' | 'invite_only';
  export type ITrusScore = 'any' | 'excellent' | 'good' | 'fair' | 'bad';
  export type ICitizenshipRequirement = 'any' | 'only_us_citizens';
  export type IProjectSize = 'small' | 'medium' | 'large';
  export type IProjectTake = '1_3_months' | '3_6_months' | 'over_6_months';
  export type IProjectMinimumWeeklyTime = 'more_than_30_hours' | 'less_than_30_hours' | 'not_sure';
  export type ITrustScore = 'any' | 'excellent' | 'good' | 'fair' | 'bad';
  export type IWhoCanSee = 'all' | 'just_connection' | 'invite_only';
  export type IPaymentRequestStatus = 'requested' | 'approved' | 'rejected';
  export type ICompanyRole = 'project_owner';

  export type ISavedMarkProjectType = 'recommend' | 'featured';
  export type ISigningContractStatus = 'signed' | 'declined' | 'finish_later' | 'waiting';
  export type IAccountStatus = 'pending_review' | 'active' | 'rejected' | 'inactive' | 'suspended';
  export type IConnectionStatus = 'pending' | 'requested' | 'accepted';

  export type IWebsocketMessageType = 'signing_complete' | 'viewing_complete' | 'started_typing' | 'stopped_typing';

  export type IProjectType = 'all' | 'fixed' | 'hourly';
  export type IProjectVisibiltyType = 'all' | 'invite_only' | 'public';

  export interface ISubMenu {
    label: string;
    href?: ROUTE;
    icon?: React.ReactNode;
    iconActive?: React.ReactNode;
    key: string;
  }
  export interface IMenu {
    icon: React.ReactNode;
    iconActive: React.ReactNode;
    label: string;
    children?: ISubMenu[];
    href?: ROUTE | string;
    key: string;
  }

  export interface IRoute {
    [x: string]: string;
  }

  export interface IPaginationParams {
    keyword?: string;
    page?: number;
    limit?: number;
    sort_by?: 'newest' | 'best_match';
    count_total?: boolean;
    sort?: string;
  }

  export interface IPagination<T> {
    name: string;
    id: EntityId;
    current_page: number;
    has_next: boolean;
    has_prev: boolean;
    metadata: any;
    next_page: number;
    offset: number;
    per_page: number;
    prev_page: number;
    records: Array<T>;
    total_page: number;
    total_record: number;
  }

  // AUTH
  export interface ILoginEmailParams {
    email: string;
    password: string;
  }

  export interface IVerifyEmailParam {
    email: string;
    otp_code: string;
  }

  export interface IVerifyEmailMagicLinkParam {
    email: string;
    return_url: string;
    is_register: boolean;
  }

  export interface IUsersFilters extends AppTypes.IPaginationParams {
    roles?: AppTypes.IRole[];
    account_statuses?: IAccountStatus[];

    // filter discover talent
    job_titles?: string[];
    location_work_types?: string[];
    weekly_hours?: string[];
    skills?: string[];
    languages?: string[];
    rate_type?: string;

    sort_by?: 'newest' | 'best_match';

    categories?: string[];
    skills?: string[];
    price_per_hour_min?: number;
    price_per_hour_max?: number;
    start_date?: number;
    completion_date?: number;
    city?: string;
    project_price_min?: number;
    project_price_max?: number;
  }

  export interface IRecords<T> {
    records: Array<T>;
  }

  export interface ITrackActivityForm {}

  export interface ITransactionParam extends IPaginationParams {
    types?: ITransactionType[];
    from_date: number;
    to_date: number;
  }

  export interface ITransactionMetadata {
    payment_intent_status: string;
    payment_intent_id: string;

    amount: string;
    stripe_fee_amount: string;

    collected_fee_amount: string;
    freelancer_collected_fee_amount: string;
    client_collected_fee_amount: string;
  }

  export interface ITransaction {
    id: string;
    created_at: number;
    updated_at: number;
    deleted_at?: any;
    type: ITransactionType;

    user_id: string;
    user: IUser;

    other_user_id: string;
    other_user: IUser;

    project_id: string;
    project: IProject;

    milestone_id: string;
    milestone: IProjectMileStones;

    track_hour_ids: string[];
    track_hours: ITrackHour[];

    description: string;
    amount: number;

    balance: number;
    stripe_payment_type: IStripePaymentType;

    track_hour_date_from?: number;
    track_hour_date_to?: number;

    milestone_date_from?: number;
    milestone_date_to?: number;

    metadata: ITransactionMetadata;
  }

  export interface TransactionMetadata {
    order_reference_id?: string;
    order_pricing?: OrderPricing;
    momo_transaction_request_id?: string;
  }

  export interface IBalanceResponse {
    balance_milestones: string;
    balance_hourly: string;
    balance: string;
  }

  export interface IPaymentRequest extends IModel {
    type: ITransactionType;

    user_id: string;
    user: IUser;

    project_id: string;
    project: IProject;

    milestone_id: string;
    milestone: IProjectMileStones;

    description: string;
    amount: number;

    stripe_payment_type: IStripePaymentType;
    track_hour_date_from?: number;
    track_hour_date_to?: number;
  }

  export interface IAttachment {
    media_type?: string;
    file_url?: string;
    file_key?: string;
    content_type?: string;
    thumbnail_url?: string;
    metadata?: { [key: string]: any };
  }

  export interface ISignupResponse {
    token: string;
    refresh_token: string;
    user: IUser;
  }

  export interface IForgotPasswordResponse {
    message?: string;
  }

  export interface IUserUpdateForm extends Partial<IUser> {}
  export interface IUserCreateForm {}
  export interface ILoginResponse {
    user: IUser;
    token: string;
    refresh_token: string;
  }

  export interface ILoginEmailForm {
    email: string;
  }

  export type IResendOTPEmailForm = ILoginEmailForm;

  export interface IRegisterEmailParams {
    email: string;
    role?: IRole;
    referer_id?: string;
  }

  export interface IGenerateAuthorizeRedirectState {
    success_url?: string;
    failure_url?: string;
    role?: IRole;
    is_register?: boolean;
  }

  export interface IGenerateAuthorizeForm {
    email?: string;
    connection_type?: IConnectionType;
    redirect_uri?: string;
    state?: IGenerateAuthorizeRedirectState;
  }

  export interface IEmailResponse {
    is_new_user: boolean;
    message: string;
    next_in_seconds: number;
  }

  export interface ICodeOTP {
    otp_code: string;
  }

  // ===== CONSTANTS =====
  export interface INameId {
    id: string;
    name: string;
  }

  export interface IConstantItem<T> {
    value: T;
    name: string;
  }
  export interface IWorkReferenceTime {
    value: string;
    name: string;
  }
  export interface IJobRoles {
    value: string;
    name: string;
  }
  export interface IBusinessEstablishes {
    value: string;
    name: string;
  }
  export interface IBusinessSizes {
    value: string;
    name: string;
  }
  export interface ISkills {
    value: string;
    name: string;
    label: string;
  }

  export interface IConstants {
    roles: IConstantItem<IRole>[];
    account_statuses: IConstantItem<IAccountStatus>[];
    address_types: IConstantItem<IUserAddressType>[];
    college_countries: IConstantItem<string>[];
    application_statuses: IConstantItem<IUserApplicationStatus>[];
    chat_message_types: IConstantItem<IChatMessageType>[];
    fee_types: IConstantItem<IFeeType>[];
    location_work_types: IConstantItem<ILocationWorkType>[];
    project_location_work_types: IConstantItem<ILocationWorkType>[];
    milestone_statuses: IConstantItem<IProjectMilestoneStatus>[];
    project_statuses: IConstantItem<IProjectStatus>[];
    connection_statuses: IConstantItem<IConnectionStatus>[];
    business_establishes: IConstantItem<IBusinessEstablishes>[];
    business_sizes: IConstantItem<IBusinessSizes>[];
    languages: IConstantItem<ILanguageName>[];
    language_skills: IConstantItem<ILanguageSkill>[];
    language_competencies: IConstantItem<ILanguageCompetency>[];
    job_competencies: IConstantItem<IJobCompetency>[];
    company_roles: IConstantItem<ICompanyRole>[];
    personality_assessments: IConstantItem<IPersonalityAssessment>[];
    work_times: IConstantItem<IWorkTime>[];
    job_roles: IJobRoles[];
    skills: ISkills[];

    transaction_types: IConstantItem<ITransactionType>[];
    project_agreement_types: IConstantItem<IProjectAgreememtType>[];

    offer_statuses: IConstantItem<IOfferStatus>[];

    categories: IConstantItem<ICategory>[];
    who_can_see: IConstantItem<IWhoCanSee>[];
    minimum_trust_scores: IConstantItem<ITrusScore>[];
    citizenship_requirements: IConstantItem<ICitizenshipRequirement>[];
    project_sizes: IConstantItem<IProjectSize>[];
    project_takes: IConstantItem<IProjectTake>[];
    project_minimum_weekly_times: IConstantItem<IProjectMinimumWeeklyTime>[];
    user_rating_relationships: IConstantItem<string>[];
    work_preference_times: IWorkReferenceTime[];
    work_preference_time_periods: IWorkReferenceTime[];
    work_preference_number_of_hours_per_weeks: IConstantItem<IWorkReferenceNumberOfHoursPerWeek>[];

    experience_levels: IConstantItem<IExperienceLevel>[];

    track_hour_statuses: IConstantItem<ITrackHourStatus>[];
  }

  export interface IGlobalSettings {
    primaryKey: string;
    stripe_client_application_fee_percentage: number;
    stripe_freelancer_application_fee_percentage: number;
  }
  export interface IS3Signature {
    key: string;
    url: string;
    policy: string;
    'x-amz-credential': string;
    'x-amz-algorithm': string;
    'x-amz-signature': string;
    'x-amz-date': string;
    acl: string;
    'content-type': string;
  }

  export interface IConnection {
    id: string;
    name: string;
    connectedDate: string;
    imageUrl?: string;
  }
  export interface ILanguageLevel {
    competency: AppTypes.ILanguageCompetency;
    language: string;
    skills: string[];
  }
  export interface IEducation {
    country: string;
    degree: string;
    major: string;
    school: string;
    year_of_graduation: string;
  }
  export interface IWorkPreference {
    time: string;
    time_period: string;
    type: string;
  }
  export interface BackgroundCheck {
    license: string;
    ssn: string;
  }
  export interface IPersonApproval {
    name: string;
    phone_number: string;
    position: string;
  }
  export interface IEmploymentHistory {
    company_name: string;
    description: string;
    from: number;
    logo: Logo;
    position: string;
    to: number;
    work_type: string;
  }
  export interface IJobRole {
    value: string;
    name: string;
  }
  export interface ISkill {
    [x: string]: any;
    competency: string;
    name: string;
  }

  export interface ISavedMarkProject {
    name: string;
    created_at: number;
    id: string;
    updated_at: number;
    user_id: string;
    deleted_at?: null;
    user?: IUser;
  }

  export interface ISavedMarkTalent extends ISavedMarkProject {}
  export interface ISavedTalent extends IUser {
    id?: string;
    user_id?: string;
    note: string;
  }

  export interface IProject {
    id: string;
    created_at: number;
    updated_at: number;
    deleted_at: any;
    work_site?: ILocation;
    word_site_id: string;
    status_changed_at: number;
    milestones: IProjectMileStones[];
    user_id: string;
    user: IUser;
    objective: string;
    language_levels: ILanguageLevel[];
    scope: string;
    status: IProjectStatus;
    is_draft: boolean | number;
    is_saved: boolean;
    saved_project_id: string;
    title: string;
    fee_type: IFeeType;
    categories: any;
    skills: string[];
    job_description: string;
    size: string;
    project_take: string;
    project_minimum_weekly_time: string;
    location_work_type: ILocationWorkType;
    citizenship_requirement: ICitizenshipRequirement;
    price_per_hour: Number;
    price_per_hour_from: Number;
    price_per_hour_to: Number;
    start_date: any;
    completion_date: any;
    mode: IProjectMode;
    fee_amount: number;
    minimum_trust_score: string;
    who_can_see: string;
    max_weekly_hour: number;
    project_id?: string;
    assigned_freelancer_id?: string;
    application_status: IApplicationStatus;
    application_id: string;
    applications: IApplication[];

    matching_percentage: number;
    min_experience_level: string;

    project_price?: string;
    client_project_price_application_fee?: string;
    freelancer_project_price_application_fee?: string;

    project_paid_out?: string;
    client_project_paid_out_application_fee?: string;
    freelancer_project_paid_out_application_fee?: string;

    project_escrow?: string;

    total_new_applicants?: number;
    saved_project_mark_id?: string;
  }

  export interface IFreelancerGetQuestionsFilters extends IPaginationParams {}

  export interface IQuestion {
    content: string;
    created_at: number;
    deleted_at: number;
    id: string;
    owner: IUser;
    owner_id: string;
    question: IQuestion;
    project: IProject;
    project_id: string;
    updated_at: number;
  }

  export interface IMilestoneApplication {
    id: string;

    name: string;

    budget: string;

    start_date: number;
    completion_date: number;
  }

  export interface IProjectApplication {
    id: string;

    start_date: any;
    completion_date: any;

    // For FeeType=hourly
    price_per_hour?: string;
    price_per_hour_from?: string;
    price_per_hour_to?: string;

    max_weekly_hour?: number;

    // For FeeType=milestone
    milestones?: IMilestoneApplication[];
    project_price?: string;
  }
  export interface IFreelancerCreateApplicationsParams {
    additional_notes?: string;
    cover_letter?: string;
    resume?: IAttachment;
    project_id?: string;
    status?: IApplicationStatus;
    answers?: IAnswer[];
    project_application?: IProjectApplication;
  }

  export interface IFreelancerUpdateApplicationsParams extends IFreelancerCreateApplicationsParams {
    application_id: string;
    project_id: string;
  }

  export interface IAnswer {
    project_id: string;
    question_id: string;
    content: string;
  }

  export interface IApplication {
    additional_notes?: string;
    cover_letter?: string;
    personal_message?: string;
    created_at?: number;
    deleted_at?: number;
    resume: IAttachment;
    id?: string;
    owner?: IUser;
    owner_id?: string;
    project?: IProject;
    project_id?: string;
    status?: IApplicationStatus;
    status_changed_at?: string;
    updated_at?: string;
    user?: IUser;
    user_id?: string;

    offer_client_signing_contract_status?: ISigningContractStatus;
    offer_freelancer_signing_contract_status?: ISigningContractStatus;

    project_application?: IProjectApplication;
    answers?: IAnswer[];
    invited_at?: number;
  }

  export interface ILocation {
    building_name: string;
    city: string;
    country: string;
    country_code: string;
    county: string;
    created_at: string;
    deleted_at: string;
    district: string;
    formatted_address: string;
    id: string;
    lat: string;
    lng: string;
    neighborhood: string;
    number: string;
    place_id: string;
    postal_code: string;
    state: string;
    state_code: string;
    street: string;
    type: string;
    types: string;
    updated_at: string;
    user_id: string;
    address_1: string;
    address_2: string;
  }

  export interface IUserAddress {
    id: string;
    created_at: number;
    updated_at: number;
    deleted_at: number;

    user_id: string;
    location_id: string;
    location: ILocation;

    first_name: string;
    last_name: string;
    phone_number: string;

    email: string;
    city: string;

    type: IUserAddressType;
    state_code?: string;
    time_zone?: string;
  }

  export interface IEducation {
    country: string;
    degree: string;
    major: string;
    school: string;
    year_of_graduation: string;
  }

  export interface IEmploymentHistory {
    company_name: string;
    description: string;
    from: string;
    logo: IAttachment;
    position: string;
    to: string;
    work_type: string;
  }

  export interface IJobRole {
    company?: string;
    name?: string;
    from?: number;
    to?: number;

    from_date?: Dayjs;
    to_date?: Dayjs;
  }

  export interface ISkill {
    competency: string;
    name: string;
  }

  export interface IWorkPreference {
    time: string;
    time_period: string;
    type: string;
    work_reference_number_of_hours_per_week: string;
  }

  export interface ICompany extends IModel {
    name: string;

    website: string;
    industry: string;
    business_establish: IBusinessEstablishes;
    business_size: IBusinessSizes;
    ein_number: string;
    peer_review_emails: string[];

    role: ICompanyRole;
  }

  export interface ITrustScoreSummary {
    value: ITrustScore;
    label: string;
    trust_score: number;
    max_score: number;
    trust_score_percentage: number;
  }
  export interface IUser {
    user?: any;
    is_saved: boolean;
    address: IAddress;
    account_status: IAccountStatus;
    account_status_changed_at: string;
    avatar?: IAttachment;
    background_check: IBackgroundCheck;
    bank_account_added_at: string;
    relationship: string;
    year_of_graduation: string;
    freelancer_website: string;
    bio: string;
    dob: string;
    password: string;
    certifications: string[];

    connection_status: IConnectionStatus;
    country_code: string;
    created_at: number;
    connection_hierarchy_type: IConnectionHierarchyType;
    connection_connected_at: number;
    credentials: string[];
    degrees_connection: string;
    deleted_at: string;
    description: string;
    educations: IEducation[];
    email: string;
    employment_histories: IEmploymentHistory[];
    fee_preferences: string[];
    first_name: string;
    id?: string;
    intro_attachment: IAttachment;
    is_first_login: string;
    is_test: string;
    is_verified_email: string;
    job_roles?: IJobRole[];
    job_title?: string;
    language_levels: ILanguageLevel[];
    last_login_at: number;
    last_online_at: number;
    last_name: string;
    logo: IAttachment;
    name: string;
    password_changed_at: string;
    payment_method_added_at: string;
    person_approval: IPersonApproval;
    personal_links: IPersonalLink[];
    personality_assessments: IPersonalityAssessmentItem[];
    personality_assessment_attachment?: IAttachment;
    personality_assessment_type?: string;
    phone_number: string;
    reason_rejected: string;
    resume_attachment: IAttachment;
    role: IRole;
    skills?: ISkill[];
    stripe_account_id: string;
    tags: string[];
    timezone: string;
    updated_at: string;
    work_preferences: IWorkPreference[];
    year_of_experience: string;

    is_offline: boolean;
    price_per_hour: string;
    price_per_hour_level: string;
    // Stripe
    stripe_customer_id: string;
    payment_method_id: string;
    stripe_payment_type: string;

    // Company
    company: ICompany;
    company_role: ICompanyRole;
    contact_addresses: IUserAddress[];
    contact_address_ids: string[];

    is_completed_adding_billing_method?: boolean;
    is_completed_adding_peer_reviews?: boolean;
    is_completed_adding_work_preferences?: boolean;
    is_completed_client_profile_step1?: boolean;
    is_completed_client_profile_step2?: boolean;
    is_completed_client_profile_step3?: boolean;
    is_completed_freelancer_profile_step1?: boolean;
    is_completed_freelancer_profile_step2?: boolean;
    is_completed_freelancer_profile_step3?: boolean;
    is_completed_freelancer_profile_step4?: boolean;
    is_completed_freelancer_profile_step5?: boolean;
    is_completed_identifying_verification?: boolean;
    is_finish_later?: boolean;

    trust_score: number;
    trust_score_summary: ITrustScoreSummary;
    saved_user_id?: string;
    saved_user_mark_id: string;

    // Show modal
    is_hide_fixed_price_deposit_modal: boolean;
    is_hide_hourly_deposit_modal: boolean;
    is_hide_paid_out_modal: boolean;

    // Address
    billing_address_id: string;
    billing_address: IUserAddress;
    address_id: string;
    address: IUserAddress;
    location: ILocation;
    total_trusted_connections?: number;
    varies_by_skillset?: boolean;
  }

  export interface IAddress {
    location: IUserAddress;
  }

  export interface IPersonalLink {
    type: 'website' | 'linkedin' | 'github' | 'twitter';
    link: string;
  }

  export interface IPersonalityAssessmentItem {
    personality_assessment?: IPersonalityAssessment;
    personality_assessment_type?: string;
    attachment?: IAttachment;
  }

  export interface IPersonApproval {
    name: string;
    phone_number: string;
    position: string;
  }

  type ActivityStatus = 'alert' | 'info' | 'account' | 'payment';
  type ActivityType = 'system' | 'personal' | 'account';
  export interface INotification {
    id: string;
    created_at: number;
    updated_at: number;
    status: ActivityStatus;
    content: React.ReactNode;
    date: string;
    type?: ActivityType;
    detail?: string;
  }

  export interface IConnectionFilters extends IPaginationParams {}

  export interface IFreelancerGetFavoredUsersFilters extends IPaginationParams {}

  export interface IFreelancerGetFavoringUsersFilters extends IPaginationParams {}

  export interface IFreelancerGetConnectedUsersFilters extends IPaginationParams {}

  export interface IFreelancerGetReviewFilters extends IPaginationParams {}

  export interface IFreelancerGetConnectingUsersFilters extends IPaginationParams {}

  export interface ITrackHourFilters extends IPaginationParams {
    project_id?: string;
    statuses?: ITrackHourStatus[];
    start_date_from?: number;
    start_date_to?: number;
  }

  export interface IGetReferringFilters extends IPaginationParams {}

  export interface IFreelancerGetProjectsFilters extends IPaginationParams {
    application_statuses?: AppTypes.IApplicationStatus[];
  }

  export interface IFreelancerGetWorkedClientsFilters extends IPaginationParams {
    offer_statuses?: IOfferStatus[];
  }

  export interface IFreelancerGetRecommendedProjectsFilters extends IPaginationParams {
    categories?: string[];
    skills?: string[];
    price_per_hour_min?: number;
    price_per_hour_max?: number;
    sort_by?: 'newest' | 'best_match';
    start_date?: number;
    completion_date?: number;
    project_types?: string[];
  }

  export interface IFreelancerGetRecentProjectsFilters extends IPaginationParams {}
  export interface IFreelancerOffersFilters extends IPaginationParams {
    statuses?: IOfferStatus[];
    project_id?: string;
  }

  export interface IFreelancerGetMilestonesProjectsFilters extends IPaginationParams {}

  export interface IFreelancerGetSaveProjectsFilters extends IPaginationParams {
    saved_project_mark_id?: string;
    project_id?: string;

    type?: AppTypes.ISavedMarkProjectType;
  }
  export interface IFreelancerGetSaveMarkProjectsFilters extends IPaginationParams {
    saved_project_mark_id?: string;
    name?: string;
    saved_project_id?: string;
    project_id?: string;
    type?: AppTypes.ISavedMarkProjectType;
  }

  export interface IFreelancerGetFeaturedProjectsFilters extends IPaginationParams {
    sort_by?: 'newest' | 'best_match';
  }
  export interface IFreelancerTransactionFilters extends IPaginationParams {
    project_ids?: string[];

    created_at_from?: number;
    created_at_to?: number;
  }

  export interface ITransactionFilters extends IPaginationParams {
    project_ids?: string[];

    created_at_from?: number;
    created_at_to?: number;

    track_hour_date_from?: number;
    track_hour_date_to?: number;

    milestone_statuses?: IMilestoneStatus[];
    freelancer?: string;

    fee_type?: AppTypes.IFeeType;
  }

  export interface IDashboardUpcomingPaymentsFilters extends IPaginationParams {
    statuses?: IPaymentRequestStatus[];
  }

  export interface IDashboardTopContractsFilters extends IPaginationParams {
    statuses?: IProjectStatus[];

    created_at_from?: number;
    created_at_to?: number;
  }

  export interface IPaymentRequestFilters extends IPaginationParams {
    project_ids?: string[];

    created_at_from?: number;
    created_at_to?: number;

    milestone_statuses?: IMilestoneStatus[];

    statuses?: IPaymentRequestStatus[];
  }

  export interface ICompanyTransactionFilters extends IPaginationParams {}

  export interface IFreelancerGetApplicationsFilters extends IPaginationParams {
    project_id?: string;
  }
  export interface INotificationsFilters extends IPaginationParams {
    created_at_from?: number;
    created_at_to?: number;
    is_seen?: boolean;
  }

  export interface ICompanyGetApplicationsFilters extends IPaginationParams {
    project_id?: string;
    statuses?: AppTypes.IApplicationStatus[];

    year_of_experience_from?: number;
    year_of_experience_to?: number;
    skills?: string[];
    state?: string;
  }

  export interface ICompanyGetApplicationDetailFilters {
    id?: string;
  }

  export interface ICompanyOffersFilters extends IPaginationParams {
    statuses?: IOfferStatus[];
    project_id?: string;
    application_id?: string;
  }

  export interface ICompanyGetSavedTalentsFilters extends IPaginationParams {
    saved_user_mark_id?: string;
    user_id?: string;
  }

  export interface ICompanyGetSavedTalentsMarkFilters extends IPaginationParams {
    name?: string;
    saved_user_mark_id?: string;
    saved_user_id?: string;
  }

  export interface ICompanyAddTalentsNote {
    saved_user_id: string;
    saved_user_mark_id?: string;
    note: string;
  }

  export interface ICompanyGetMilestonesFilters extends IPaginationParams {
    project_id?: string;
  }
  export interface ICompanyGetHourlyFilters extends IPaginationParams {
    project_id: string;
  }

  export interface ICompanyGetFavoredUsersFilters extends IPaginationParams {}

  export interface ICompanyGetFavoringUsersFilters extends IPaginationParams {}

  export interface ICompanyGetConnectedUsersFilters extends IPaginationParams {}

  export interface ICompanyGetConnectingUsersFilters extends IPaginationParams {}

  export interface ICompanyGetProjectsFilters extends IPaginationParams {
    project_type?: IProjectType;
    project_visibilty_type?: IProjectVisibiltyType;
  }

  export interface IProjectParams {
    is_draft: boolean;
    title: string;
    fee_type?: IFeeType;
    categories: [];
    skills: [];
    description: string;
    project_agreement?: IAttachment;
    size?: IProjectSize;
    project_take?: IProjectTake;
    project_minimum_weekly_time?: IProjectMinimumWeeklyTime;
    work_site?: ILocation;
    location_work_type: ILocationWorkType;
    citizenship_requirement: ICitizenshipRequirement;
    price_per_hour?: number;
    max_weekly_hour?: number;
    price_per_hour_from?: number;
    price_per_hour_to?: number;
    start_date?: number;
    completion_date?: number;
    fee_amount?: number;
    language_levels?: ILanguageLevel[];
    minimum_trust_score?: ITrustScore;
    who_can_see?: IWhoCanSee;
    status: IProjectStatus;
    milestones: {
      name: string;
      budget: number;
      completion_date: string;
    }[];
    questions: {
      content: string;
    }[];
    applications: {
      status: AppTypes.IApplicationStatus;
      user_id: string;
    }[];
  }

  export interface IProjectMilestoneParams {
    name: string;
    budget: string;
    completion_date: number;
    project_id: string;
  }

  export interface IMilestoneApproveDeliveryParams {
    project_id?: string;
    owner_id?: string;
    id: string;
    status?: AppTypes.IMilestoneStatus;
  }

  export interface IProjectMileStones {
    id: string;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    name: string;
    project_id: string;
    project: IProject;
    owner_id: string;
    owner: IUser;
    status: IProjectMilestoneStatus;
    status_changed_at: number;
    budget: string;
    start_date: number;
    completion_date: number;
  }

  export interface IProjectStatistic {
    total_milestones: number;
    total_milestones_pending: number;
    total_milestones_open: number;
    total_milestones_on_process: number;
    total_milestones_completed: number;
    total_milestones_approve_delivery: number;
    total_milestones_closed: number;
    next_milestone_id: string;
    next_milestone: IProjectMileStones;
  }

  export interface IProjectOffer {
    id: string;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    project: IProject;
    user: IUser;
    status: IOfferStatus;
    acceptance_due_date_at: number;
    project_id: string;
    application_id: string;
    application: IApplication;
    user_id: string;
    fee_type: IFeeType;
    price_per_hour: string;
    project_application: IProjectApplication;
    client_signing_contract_status: string;
    freelancer_signing_contract_status: string;
  }

  export interface IProjectOfferForm {
    id?: string;

    status?: IOfferStatus;
    acceptance_due_date_at?: number;
    project_id: string;
    user_id?: string;
    application_id?: string;
    fee_type?: IFeeType;
    price_per_hour?: string;
    project_agreement_type?: IProjectAgreememtType;
    project_agreement?: IAttachment;

    project_application?: IProjectApplication;
  }

  export interface IReview {
    id: string;
    created_at: number;
    updated_at: number;
    project: IProject;

    // User left comment
    owner: IUser;
    // Comment
    comment: string;
    // User left comment
    owner_id: string;

    user: IUser;
    project_id: string;
    user_id: string;
  }

  export interface IRequestRecommendationRecord {
    rated_by_user_id?: string;
    rated_by_user_email?: string;
    personal_message?: string;
    relationship?: string;
  }

  export interface IRequestRecommendationForm {
    records: IRequestRecommendationRecord[];
    redirect_url?: string;
  }

  export interface IUserRatingsAvg {
    total_rating: number;
    avg_rating: number;
  }
  export interface IUserRating {
    id: string;
    created_at: number;
    updated_at: number;
    deleted_at: any;
    rated_by_user: IRatedByUser;
    user_id: string;
    rated_by_user_id: string;
    rated_by_user_email: string;
    personal_message: string;
    status: string;
    relationship: string;
  }

  export interface IRequestReview {
    rated_by_user_email: string;
  }

  export interface IUserReview {
    project_title: string;
    additional_feedback: string;
    rated_by_user_name: string;
    relationship: string;
    updated_at: string;
  }

  export interface IRatedByUser {
    id: string;
    deleted_at: any;
    role: string;
    name: string;
    email: string;
    account_status: string;
    price_per_hour: string;
  }

  export interface IReferLink {
    referral_link: string;
  }
  export interface IProjectLink {
    Link: string;
  }

  export interface IUserTotalJobs {
    total: number;
  }
  export interface IUserTotalHours {
    total: number;
  }

  export interface IRequestRecommendation {
    id: string;
    name: string;
    email: string;
    status: string;
    relationship?: string;
  }

  export interface IGetRequestRecommendationsFilters extends IPaginationParams {}

  export interface IRequestReviewsFilters extends IPaginationParams {}
  export interface IRequestRecommend {
    id: string;
    created_at?: string;
    updated_at?: string;
    user: any;
    rated_by_user: IUser;
    project?: any;
    user_id?: string;
    rated_by_user_id?: string;
    rated_by_user_email?: string;
    personal_message?: string;
    project_id?: string;
    status?: string;
    additional_feedback?: string;
    communication?: string;
    professionalism?: string;
    payment_on_time?: boolean;
    clarity?: boolean;
    referable?: string;
    delivered_work_on_time?: boolean;
    delivered_work_on_budget?: boolean;
    hireable?: string;
    relationship?: string;
  }
  export interface IFrameSignContract {
    expired_at: string;
    url: string;
  }

  export interface IRequestRatedFilters extends AppTypes.IPaginationParams {
    status?: string;
    user_id?: string;
  }

  export interface IUserRatingsSummary {
    total: number;
    total_clarity: number;
    total_communication: number;
    total_delivered_work_on_budget: number;
    total_delivered_work_on_time: number;
    total_hireable: number;
    total_payment_on_time: number;
    total_professionalism: number;
    total_referable: number;
  }

  export type IStripePaymentType = 'card' | 'us_bank_account';
  export type ITrackHourStatus = 'pending' | 'approved' | 'request_changed' | 'deposited';

  export type IWorkReferenceNumberOfHoursPerWeek = '<9' | '10-19' | '20-29' | '30-39' | '40';

  export interface IChatRoomParams extends AppTypes.IPaginationParams {
    is_archived?: boolean;
  }
  export interface IChatRoom {
    id: string;
    created_at: number;
    updated_at: number;
    deleted_at?: any;
    name: string;
    attachments: IAttachment[];
    user_ids: string[];
    users: AppTypes.IUser[];
    seen_at?: any;
    enabled_notification_setting: boolean;
    latest_message: Partial<IChatMessage>;
    project_id: string;
    project: AppTypes.IProject;
  }

  export interface ICreateChatRoomForm {
    participant_id: string;
    project_id?: string;
  }

  export interface IChatMessageParams extends AppTypes.IPaginationParams {}
  export interface IChatMessage {
    id?: string;
    created_at?: number;
    updated_at?: number;
    deleted_at?: any;
    message_type?: string;
    chat_room_id?: string;
    chat_room?: any;
    receiver_id?: string;
    sender_id?: string;
    sender?: AppTypes.IUser;
    message?: string;
    attachments?: any[];
    seen_at?: number;
    enabled_notification_setting?: boolean;
  }

  export interface IChatTyping {
    type: string;
    user_id: string;
    data: {
      chat_room_id: string;
    };
  }

  export interface IChatMessageCreateForm {
    chat_room_id: string;
    message_type: 'user' | 'group';
    receiver_id: string;
    sender_id?: string;
    message?: string;
    attachments?: AppTypes.IAttachment[];
    files?: AppTypes.IFile[];
  }

  export interface IModel {
    id?: string;
    updated_at?: number;
    created_at?: number;
    deleted_at?: number;
  }
  // Payment Method
  export interface IStripeAddress {
    city: string;
    country: string;
    line1: string;
    line2: string;
    postal_code: string;
    state: string;
  }

  export interface IStripeBillingDetails {
    address: IStripeAddress;
    email: string;
    name: string;
    phone: string;
  }

  export interface IStripeChecks {
    address_line1_check: string;
    address_postal_code_check: string;
    cvc_check: string;
  }

  export interface IStripeNetworks {
    available: string[];
    preferred: string;
  }

  export interface IStripeThreeDSecureUsage {
    supported: boolean;
  }

  export interface IStripeCard {
    brand: string;
    checks: IStripeChecks;
    country: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    last4: string;
    networks: IStripeNetworks;
    three_d_secure_usage: IStripeThreeDSecureUsage;
    wallet?: any;
    description: string;
    iin: string;
    issuer: string;
    type: string;
  }

  export interface IStripeCustomerInvoiceSettings {
    custom_fields?: any;
    default_payment_method: IStripeDefaultPaymentMethod;
    footer: string;
    rendering_options?: any;
  }

  export interface IStripeCustomerMetadata {
    email: string;
    name: string;
    user_id: string;
  }

  export interface IStripeCustomer {
    address?: any;
    balance: number;
    cash_balance?: any;
    created: number;
    currency: string;
    default_source?: any;
    deleted: boolean;
    delinquent: boolean;
    description: string;
    discount?: any;
    email: string;
    id: string;
    invoice_credit_balance?: any;
    invoice_prefix: string;
    invoice_settings: IStripeCustomerInvoiceSettings;
    livemode: boolean;
    metadata: IStripeCustomerMetadata;
    name: string;
    next_invoice_sequence: number;
    object: string;
    phone: string;
    preferred_locales: any[];
    shipping?: any;
    sources?: any;
    subscriptions?: any;
    tax?: any;
    tax_exempt: string;
    tax_ids?: any;
    test_clock?: any;
  }

  export interface IStripeDefaultPaymentMethod {
    acss_debit?: any;
    affirm?: any;
    afterpay_clearpay?: any;
    alipay?: any;
    au_becs_debit?: any;
    bacs_debit?: any;
    bancontact?: any;
    billing_details?: any;
    blik?: any;
    boleto?: any;
    card?: any;
    card_present?: any;
    created: number;
    customer?: any;
    customer_balance?: any;
    eps?: any;
    fpx?: any;
    giropay?: any;
    grabpay?: any;
    id: string;
    ideal?: any;
    interac_present?: any;
    klarna?: any;
    konbini?: any;
    link?: any;
    livemode: boolean;
    metadata?: any;
    object: string;
    oxxo?: any;
    p24?: any;
    paynow?: any;
    pix?: any;
    promptpay?: any;
    radar_options?: any;
    sepa_debit?: any;
    sofort?: any;
    type: string;
    us_bank_account?: any;
    wechat_pay?: any;
  }

  export interface IUsBankAccount {
    account_holder_type: string;
    account_type: string;
    name: string;
    financial_connections_account: string;
    fingerprint: string;
    last4: string;
    networks: IUsBankAccountNetworks2;
    routing_number: string;
  }

  export interface IUsBankAccountNetworks2 {
    preferred: string;
    supported: string[];
  }

  export interface IPaymentMethod {
    acss_debit?: any;
    affirm?: any;
    afterpay_clearpay?: any;
    alipay?: any;
    au_becs_debit?: any;
    bacs_debit?: any;
    bancontact?: any;
    billing_details: IStripeBillingDetails;
    blik?: any;
    boleto?: any;
    card: IStripeCard;
    card_present?: any;
    created: number;
    customer: IStripeCustomer;
    customer_balance?: any;
    eps?: any;
    fpx?: any;
    giropay?: any;
    grabpay?: any;
    id: string;
    ideal?: any;
    interac_present?: any;
    klarna?: any;
    konbini?: any;
    link?: any;
    livemode: boolean;
    metadata: any;
    object: string;
    oxxo?: any;
    p24?: any;
    paynow?: any;
    pix?: any;
    promptpay?: any;
    radar_options?: any;
    sepa_debit?: any;
    sofort?: any;
    type: string;
    us_bank_account?: IUsBankAccount;
    wechat_pay?: any;
    is_default: boolean;
    type: string;
  }

  // Stripe Account
  export interface IStripeAccountBusinessProfile {
    mcc: string;
    name: string;
    product_description: string;
    support_address?: any;
    support_email: string;
    support_phone: string;
    support_url: string;
    url: string;
  }

  export interface IStripeAccountCapabilities {
    acss_debit_payments: string;
    affirm_payments: string;
    afterpay_clearpay_payments: string;
    au_becs_debit_payments: string;
    bacs_debit_payments: string;
    bancontact_payments: string;
    bank_transfer_payments: string;
    blik_payments: string;
    boleto_payments: string;
    card_issuing: string;
    card_payments: string;
    cartes_bancaires_payments: string;
    eps_payments: string;
    fpx_payments: string;
    giropay_payments: string;
    grabpay_payments: string;
    ideal_payments: string;
    india_international_payments: string;
    jcb_payments: string;
    klarna_payments: string;
    konbini_payments: string;
    legacy_payments: string;
    link_payments: string;
    oxxo_payments: string;
    p24_payments: string;
    paynow_payments: string;
    promptpay_payments: string;
    sepa_debit_payments: string;
    sofort_payments: string;
    tax_reporting_us_1099_k: string;
    tax_reporting_us_1099_misc: string;
    transfers: string;
    treasury: string;
    us_bank_account_ach_payments: string;
  }

  export interface IStripeAccountDatum {
    id: string;
    object: string;
  }

  export interface IStripeAccountExternalAccounts {
    has_more: boolean;
    url: string;
    total_count: number;
    data: IStripeAccountDatum[];
  }

  export interface IStripeAccountFutureRequirements {
    alternatives: any[];
    current_deadline: number;
    currently_due: any[];
    disabled_reason: string;
    errors: any[];
    eventually_due: any[];
    past_due: any[];
    pending_verification: any[];
  }

  export interface IStripeAccountRequirements {
    alternatives: any[];
    current_deadline: number;
    currently_due: string[];
    disabled_reason: string;
    errors: any[];
    eventually_due: string[];
    past_due: string[];
    pending_verification: any[];
  }

  export interface IStripeAccountBacsDebitPayments {
    display_name: string;
  }

  export interface IStripeAccountBranding {
    icon?: any;
    logo?: any;
    primary_color: string;
    secondary_color: string;
  }

  export interface IStripeAccountTosAcceptance {
    date: number;
    ip: string;
    user_agent: string;
  }

  export interface IStripeAccountCardIssuing {
    tos_acceptance: IStripeAccountTosAcceptance;
  }

  export interface IStripeAccountDeclineOn {
    avs_failure: boolean;
    cvc_failure: boolean;
  }

  export interface IStripeAccountCardPayments {
    decline_on: IStripeAccountDeclineOn;
    statement_descriptor_prefix: string;
    statement_descriptor_prefix_kana: string;
    statement_descriptor_prefix_kanji: string;
  }

  export interface IStripeAccountDashboard {
    display_name: string;
    timezone: string;
  }

  export interface IStripeAccountPayments {
    statement_descriptor: string;
    statement_descriptor_kana: string;
    statement_descriptor_kanji: string;
    statement_descriptor_prefix_kana: string;
    statement_descriptor_prefix_kanji: string;
  }

  export interface IStripeAccountSchedule {
    delay_days: number;
    interval: string;
    monthly_anchor: number;
    weekly_anchor: string;
  }

  export interface IStripeAccountPayouts {
    debit_negative_balances: boolean;
    schedule: IStripeAccountSchedule;
    statement_descriptor: string;
  }

  export interface IStripeAccountSepaDebitPayments {
    creditor_id: string;
  }

  export interface IStripeAccountSettings {
    bacs_debit_payments: IStripeAccountBacsDebitPayments;
    branding: IStripeAccountBranding;
    card_issuing: IStripeAccountCardIssuing;
    card_payments: IStripeAccountCardPayments;
    dashboard: IStripeAccountDashboard;
    payments: IStripeAccountPayments;
    payouts: IStripeAccountPayouts;
    sepa_debit_payments: IStripeAccountSepaDebitPayments;
    treasury?: any;
  }

  export interface IStripeAccountTosAcceptance2 {
    date: number;
    ip: string;
    service_agreement: string;
    user_agent: string;
  }

  export interface IStripeAccount {
    name: string;
    brand: string;
    last4: string;
    type: IStripePaymentType;
  }

  // Bank Account
  export interface IBankAccount {
    account: IStripeAccount;
    account_holder_name: string;
    account_holder_type: string;
    account_type: string;
    available_payout_methods: string[];
    bank_name: string;
    country: string;
    currency: string;
    customer?: any;
    default_for_currency: boolean;
    deleted: boolean;
    fingerprint: string;
    id: string;
    last4: string;
    metadata: any;
    object: string;
    routing_number: string;
    status: string;
  }

  export type IStripeExternalAccount = IUsBankAccount & IStripeCard & { object: string };

  // Setup Intent
  export interface ICustomer {
    address: null;
    balance: number;
    cash_balance: null;
    created: number;
    currency: string;
    default_source: null;
    deleted: boolean;
    delinquent: boolean;
    description: string;
    discount: null;
    email: string;
    id: string;
    invoice_credit_balance: null;
    invoice_prefix: string;
    invoice_settings: null;
    livemode: boolean;
    metadata: null;
    name: string;
    next_invoice_sequence: number;
    object: string;
    phone: string;
    preferred_locales: null;
    shipping: null;
    sources: null;
    subscriptions: null;
    tax: null;
    tax_exempt: string;
    tax_ids: null;
    test_clock: null;
  }

  export interface IPaymentMethodOptions {
    acss_debit: null;
    blik: null;
    card: null;
    link: null;
    sepa_debit: null;
    us_bank_account: IUsBankAccountOption;
  }

  export interface IUsBankAccountOption {
    financial_connections: IFinancialConnections;
    verification_method: string;
  }

  export interface IFinancialConnections {
    permissions: string[];
    return_url: string;
  }

  export interface ISetupIntent {
    application: null;
    attach_to_self: boolean;
    cancellation_reason: string;
    client_secret: string;
    created: number;
    customer: ICustomer;
    description: string;
    flow_directions: null;
    id: string;
    last_setup_error: null;
    latest_attempt: null;
    livemode: boolean;
    mandate: null;
    metadata: any;
    next_action: null;
    object: string;
    on_behalf_of: null;
    payment_method: null;
    payment_method_options: IPaymentMethodOptions;
    payment_method_types: string[];
    single_use_mandate: null;
    status: string;
    usage: string;
  }

  export interface ILocation extends IModel {
    address_1: string;
    address_2: string;
    address_id: string;
    building_name: string;
    city: string;
    country: string;
    country_code: string;
    county: string;

    district: string;
    first_name: string;
    formatted_address: string;
    time_zone: string;

    last_name: string;
    lat: number;
    lng: number;
    name: string;
    neighborhood: string;
    number: string;
    phone_number: string;
    place_id: string;
    postal_code: string;
    state: string;
    state_code: string;
    street: string;
    type: string;
    types: string;
    user_id: string;
  }

  // Dashboard
  export interface IDashboardTotalProjects {
    total_projects: number;
    total_active_projects: number;
    total_completed_projects: number;
  }

  export interface IDashboardUpcomingPayments {
    total_amount: string;
  }

  export interface IDashboardEarning {
    total_amount: string;
  }

  export interface IDashboardTopContract extends IProject {
    project_price?: string;
    client_project_price_application_fee?: string;
    freelancer_project_price_application_fee?: string;

    project_paid_out?: string;
    client_project_paid_out_application_fee?: string;
    freelancer_project_paid_out_application_fee?: string;
  }

  export interface ITrackHour extends IModel {
    project_id?: string;
    project?: AppTypes.IProject;

    // Company
    owner_id?: string;
    owner?: AppTypes.IUser;

    // Freelancer
    user_id?: string;
    user?: AppTypes.IUser;

    status?: ITrackHourStatus;
    status_changed_at?: number;

    start_date?: number;
    number_of_hours?: number;
    number_of_hours_text?: string;
    number_of_hours_by_dayjs?: dayjs.Dayjs;
    budget?: string | number;
  }

  export interface IStepsProps {
    titleStep: JSX.Element;
    title?: string;
    description?: string;
    content?: JSX.Element;
  }

  export interface IWebsocketMessage extends IChatMessage {
    [key: string]: any;

    // For chat

    // For other
    type: IWebsocketMessageType;
    user_id: string;
    role: IRole;
    data: {
      offer?: IProjectOffer;
      offer_id?: string;
      project_id?: string;
      application_id?: string;
    };
  }

  export interface ISigningDrawerVisibility {
    visibility: boolean;
    projectID?: String;
    applicationID?: String;
  }

  export interface ITotalProject {
    total: number;
  }

  export interface IRatingSummary {
    total_rating: number;
    avg_rating: number;
  }
  export interface IDimensions {
    device: IDevice;
  }

  export interface INavBar {
    openLegalCenter: boolean;
    openSetting: boolean;
  }
}
