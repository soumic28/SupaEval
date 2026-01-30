import { Shield, Lock, Key, FileCheck, Users, Server } from "lucide-react";
import Link from "next/link";
import { Callout } from "@/app/docs/_components/callout";

export default function SecurityPage() {
    return (
        <>
            <h1 id="security">Security & Compliance</h1>
            <p>
                SupaEval is built with enterprise-grade security and compliance features to protect
                your data and meet regulatory requirements.
            </p>

            <h2 id="data-security">Data Security</h2>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <Lock className="w-5 h-5 text-indigo-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Encryption at Rest</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        All data is encrypted using AES-256 encryption in our databases and storage systems.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <Shield className="w-5 h-5 text-violet-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Encryption in Transit</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        TLS 1.3 for all API communications. HTTPS-only connections enforced.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <Key className="w-5 h-5 text-blue-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">API Key Management</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Scoped API keys with role-based permissions. Rotate keys without downtime.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <Server className="w-5 h-5 text-green-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Infrastructure Security</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Hosted on SOC 2 compliant infrastructure with regular security audits.
                    </p>
                </div>
            </div>

            <h2 id="authentication">Authentication & Authorization</h2>
            <ul>
                <li><strong>API Keys</strong> - Secure token-based authentication</li>
                <li><strong>OAuth 2.0</strong> - Enterprise SSO integration (coming soon)</li>
                <li><strong>SAML</strong> - Identity provider integration (enterprise plan)</li>
                <li><strong>MFA</strong> - Multi-factor authentication for account access</li>
            </ul>

            <h2 id="access-control">Access Control</h2>

            <h3 id="role-based-access">Role-Based Access Control (RBAC)</h3>
            <p>
                Granular permission management:
            </p>
            <ul>
                <li><strong>Admin</strong> - Full access to all resources and settings</li>
                <li><strong>Developer</strong> - Create and run evaluations, view results</li>
                <li><strong>Viewer</strong> - Read-only access to dashboards and results</li>
                <li><strong>Custom Roles</strong> - Define specific permissions (enterprise plan)</li>
            </ul>

            <h3 id="team-management">Team Management</h3>
            <ul>
                <li>Invite team members with specific roles</li>
                <li>Audit logs of all user actions</li>
                <li>Automatic session expiry</li>
                <li>IP allowlisting for sensitive operations</li>
            </ul>

            <Callout variant="warning" title="Principle of Least Privilege">
                Grant users the minimum permissions needed for their role. Regularly review and audit
                access permissions.
            </Callout>

            <h2 id="compliance">Compliance & Certifications</h2>

            <div className="space-y-4 my-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <FileCheck className="w-5 h-5 text-indigo-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">SOC 2 Type II</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Annual audits of security, availability, and confidentiality controls.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <Shield className="w-5 h-5 text-violet-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">GDPR Compliant</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        EU data residency options. Data processing agreements available.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <Lock className="w-5 h-5 text-blue-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">HIPAA (Coming Soon)</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        HIPAA-compliant infrastructure for healthcare applications.
                    </p>
                </div>
            </div>

            <h2 id="data-privacy">Data Privacy</h2>
            <ul>
                <li><strong>Data Isolation</strong> - Tenant-level data separation</li>
                <li><strong>Data Retention</strong> - Configurable retention policies</li>
                <li><strong>Data Deletion</strong> - Complete data removal on request</li>
                <li><strong>Anonymization</strong> - PII detection and redaction options</li>
            </ul>

            <h2 id="monitoring">Security Monitoring</h2>
            <p>
                Continuous security monitoring includes:
            </p>
            <ul>
                <li>Real-time threat detection</li>
                <li>Intrusion prevention systems</li>
                <li>Anomaly detection for API usage</li>
                <li>Automated security patching</li>
            </ul>

            <h2 id="audit-logs">Audit Logs</h2>
            <p>
                Comprehensive audit trails of:
            </p>
            <ul>
                <li>API requests and responses</li>
                <li>User authentication events</li>
                <li>Permission changes</li>
                <li>Data access and modifications</li>
                <li>Export and deletion requests</li>
            </ul>

            <Callout variant="info" title="Enterprise Features">
                Advanced security features like SAML SSO, custom roles, and extended audit logs
                are available on enterprise plans. Contact sales for details.
            </Callout>

            <h2 id="incident-response">Incident Response</h2>
            <p>
                In the unlikely event of a security incident:
            </p>
            <ul>
                <li>24/7 security team monitoring</li>
                <li>Immediate notification to affected customers</li>
                <li>Transparent incident reports</li>
                <li>Post-mortem analysis and prevention measures</li>
            </ul>

            <h2 id="responsible-disclosure">Responsible Disclosure</h2>
            <p>
                Found a security vulnerability? We appreciate responsible disclosure:
            </p>
            <ul>
                <li>Email: security@supaeval.com</li>
                <li>Encryption: PGP key available on request</li>
                <li>Bug bounty program (details on website)</li>
            </ul>

            <h2 id="next-steps">Next Steps</h2>
            <div className="space-y-3 mt-6">
                <Link href="/docs/getting-started/quickstart" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Get Started</h4>
                        <p className="text-sm text-muted-foreground">Start using SupaEval securely</p>
                    </div>
                </Link>
            </div>
        </>
    );
}
