import { ArrowRight, Mail } from "lucide-react";

import styles from "./email-subscription.module.css";

const cn = (names: string) =>
  names
    .split(" ")
    .filter(Boolean)
    .map((n) => styles[n as keyof typeof styles] || n)
    .join(" ");

export default function EmailSubscription() {
  return (
    <div>
      {/* Newsletter */}
      <section className={cn("newsletter")}>
        <div className={cn("newsletter-content center-content")}>
          <div className={cn("newsletter-icon")}>
            <Mail size={32} />
          </div>
          <div className={cn("newsletter-text")}>
            <h3>Stay connected with PBJT</h3>
            <p>
              Subscribe to our newsletter to stay updated on our latest
              research, stories, and opportunities.
            </p>
          </div>
          <button className={cn("subscribe-btn")} type="button">
            Subscribe Now <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
