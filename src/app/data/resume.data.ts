import { ResumeData } from '../models/resume.model';

export const RESUME_DATA: ResumeData = {
  personal: {
    name: 'Priyanka Bommanahalli Raghunath',
    title: 'AWS Cloud & DevOps Engineer',
    summary: 'Results-driven AWS Cloud and DevOps Engineer specializing in secure cloud infrastructure, automation, CI/CD, migrations, reliability, and observability.',
    email: 'bommanahallipriyanka8@gmail.com',
    phone: '+1 (226) 242-1987',
    location: 'Canada',
    linkedin: 'https://www.linkedin.com/in/priyanka-b-raghunath/',
    profileImage: 'assets/images/profile-placeholder.svg',
    resumePath: 'assets/documents/resume.pdf'
  },
  overview: 'Cloud and DevOps professional with nearly 4 years of experience deploying scalable infrastructure across AWS and Azure. Experienced with migration initiatives, infrastructure as code, container orchestration, CI/CD, cloud governance, monitoring, troubleshooting, cost optimization, and Agile collaboration.',
  yearsExperience: 'Nearly 4 years',
  strengths: ['Proactive and adaptive approach', 'System reliability mindset', 'Automation-first thinking', 'Cross-functional collaboration', 'Agile delivery'],
  highlights: ['AWS and Azure cloud infrastructure', 'CI/CD pipeline design and optimization', 'Terraform and Ansible automation', 'Docker, Kubernetes, Helm, and EKS', 'Monitoring, observability, and incident support'],
  skills: [
    { name: 'AWS services', icon: '☁', skills: ['EC2', 'S3', 'VPC', 'VPN', 'ECR', 'EBS', 'IAM', 'AMI', 'Systems Manager', 'CloudFormation', 'CloudTrail', 'Lambda', 'Auto Scaling Groups', 'RDS', 'CDK', 'DNS', 'DMS', 'SMS', 'Migration Hub'] },
    { name: 'CI/CD & version control', icon: '↗', skills: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline', 'Git', 'GitHub', 'GitHub Actions', 'Jenkins', 'Maven'] },
    { name: 'Infrastructure automation', icon: '⌘', skills: ['Terraform', 'Ansible'] },
    { name: 'Containers & orchestration', icon: '▣', skills: ['Docker', 'Kubernetes', 'Amazon EKS', 'Amazon ECS Fargate', 'Helm'] },
    { name: 'Databases & monitoring', icon: '◉', skills: ['SQL', 'MySQL', 'PostgreSQL', 'Prometheus', 'Grafana', 'Datadog', 'Dynatrace', 'CloudWatch', 'NinjaOne'] },
    { name: 'Security & scripting', icon: '◆', skills: ['IAM', 'Kubernetes Secrets', 'ConfigMaps', 'AWS security best practices', 'Python', 'Bash', 'YAML', 'HCL', 'Groovy'] },
    { name: 'Platforms & collaboration', icon: '＋', skills: ['Linux', 'Windows', 'Active Directory', 'Microsoft 365 Admin Center', 'Microsoft Intune', 'FortiGate', 'Agile', 'Jira', 'Confluence'] }
  ],
  experience: [
    {
      role: 'Cloud Support DevOps Engineer', company: 'Toronto Regional Real Estate Board', startDate: 'Apr 2026', endDate: 'Present', current: true,
      responsibilities: [
        'Manage and support multi-cloud infrastructure services across AWS and on-premises environments, focusing on reliability, availability, and compliance.',
        'Design, deploy, and maintain cloud solutions using AWS CodeCommit, CodeBuild, CodeDeploy, and CodePipeline.',
        'Provide AWS subject-matter expertise for reliability and business recovery objectives.',
        'Lead migration initiatives, including workloads moving from EC2 to ECS Fargate.',
        'Monitor and troubleshoot cloud resources using CloudWatch, provider consoles, and CLI tools; participate in major incident support.',
        'Develop cloud governance, standards, compliance procedures, and infrastructure policies.',
        'Manage on-premises servers, onboarding, Active Directory, Microsoft 365, Intune, FortiGate VPN, access permissions, and security controls.'
      ]
    },
    {
      role: 'Cloud Engineer', company: 'DHL Global Forwarding', startDate: 'Nov 2024', endDate: 'Mar 2025',
      responsibilities: [
        'Provisioned AWS EC2, S3, RDS, VPC, and IAM resources with Terraform.',
        'Automated build, test, and deployment workflows for Java microservices with Git, AWS CodePipeline, and CodeBuild.',
        'Built and deployed services on EC2 and EKS with Maven, Ansible, Docker, and Helm.',
        'Deployed and maintained Azure VMs, Blob Storage, and Azure SQL Database.',
        'Used Jenkins and Kubernetes to support scalable, highly available microservices.',
        'Automated AWS provisioning and monitoring with Python and Bash; supported migration with Migration Hub and SMS.',
        'Designed monitoring, logging, distributed tracing, Grafana dashboards, Prometheus alerts, and observability workflows.'
      ]
    },
    {
      role: 'Cloud Software Engineer', company: 'Daimler Truck Innovation Center', startDate: 'Dec 2022', endDate: 'Aug 2023',
      responsibilities: [
        'Supported production AWS environments using EC2, S3, VPC, IAM, RDS, Route 53, ECR, EBS, CloudFront, Lambda, and EKS.',
        'Troubleshot application errors, latency, and connectivity issues using AWS CLI and CloudWatch logs, metrics, and dashboards.',
        'Created repeatable environments with CloudFormation.',
        'Containerized applications with Docker and orchestrated Kubernetes deployments on EKS.',
        'Developed Lambda functions to automate backend workflows and enable on-demand scaling.',
        'Defined and maintained SLOs, SLIs, and SLAs aligned with business reliability goals.'
      ]
    },
    {
      role: 'Software Engineer - Cloud', company: 'Capgemini Private Limited', startDate: 'May 2021', endDate: 'Dec 2022',
      responsibilities: [
        'Managed and monitored cloud resources with AWS CloudWatch and CloudTrail.',
        'Developed Python and Bash automation scripts to streamline deployments.',
        'Architected CI/CD pipelines using GitHub Actions and AWS CodePipeline.',
        'Implemented granular IAM roles, policies, and security groups using least-privilege principles.',
        'Led backup and disaster recovery initiatives using AWS Backup and cross-region replication.'
      ]
    },
    {
      role: 'System Engineer', company: 'IBM Private Limited', startDate: 'Nov 2018', endDate: 'Apr 2021',
      responsibilities: [
        'Managed procurement activities including vendor onboarding, purchase orders, contract compliance, and invoice reconciliation.',
        'Coordinated with stakeholders and vendors on pricing, delivery timelines, and service terms.',
        'Monitored supplier performance and supported contractual, financial, and audit compliance.',
        'Maintained procurement reports and documentation using enterprise systems and Microsoft Excel.'
      ]
    }
  ],
  education: [
    { credential: 'Post Graduate Certificate in Research Analyst', institution: 'Humber Polytechnic', startDate: 'May 2024', endDate: 'Apr 2025' },
    { credential: 'Post Graduate Certificate in Project Management', institution: 'Humber Polytechnic', startDate: 'Sep 2023', endDate: 'Apr 2024' },
    { credential: 'Bachelor’s in Engineering', institution: 'Visvesvaraya Technological University', startDate: 'Aug 2014', endDate: 'Jun 2018' }
  ],
  projects: [],
  certifications: [
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', verificationUrl: 'https://www.credly.com/badges/90ae4f3e-5d70-4edd-9b24-8d0a2d661f11/public_url' },
    { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', verificationUrl: 'https://www.credly.com/badges/114c2313-6a24-4f7b-a541-9a63099e81a3/public_url' },
    { name: 'HashiCorp Terraform Associate', issuer: 'HashiCorp', verificationUrl: 'https://www.credly.com/badges/3a9ff93f-fd42-41c7-9c58-006921e62904/public_url' },
    { name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', verificationUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/PriyankaBR-7787/1A6FD217DB0F67A0?sharingId=C94FDDCA5E0115FC' }
  ],
  achievements: []
};