import Wrapper from "@/components/Wrapper";
import {
  Document,
  Headline,
  Subheadline,
  Section,
  Block,
  Email,
} from "@/components/utility/Markdown";

export default function Terms() {
  return (
    <Wrapper>
      <main className="flex justify-center">
        <Document>
          <Headline>
            Terms of Service <br className="sm:hidden" /> Agreement for Nanobot
          </Headline>
          <Section>
            <Subheadline>Introduction</Subheadline>
            <Block>
              Welcome to Nanobot, a bot designed to make cryptocurrency more fun
              and accessible to the world. By using this bot, you agree to the
              terms and conditions outlined in this Terms of Service agreement.
            </Block>
          </Section>
          <Section>
            <Subheadline>Acceptance of Terms</Subheadline>
            <Block>
              By using Nanobot, you agree to abide by the terms and conditions
              outlined in this agreement. If you do not agree to these terms,
              you may not use Nanobot.
            </Block>
          </Section>
          <Section>
            <Subheadline>Eligibility</Subheadline>
            <Block>
              Only users who are legally eligible to use Nanobot may do so.
            </Block>
          </Section>
          <Section>
            <Subheadline>User Conduct</Subheadline>
            <Block>
              You agree not to use Nanobot to engage in any abusive or harassing
              behavior, spamming, or any other form of misconduct. We reserve
              the right to terminate your access to Nanobot if you engage in any
              behavior that violates this agreement.
            </Block>
          </Section>
          <Section>
            <Subheadline>Use of Funds</Subheadline>
            <Block>
              All deposited funds in Nanobot are held in an on-chain wallet.
              Users can expect their funds to be available for withdrawal at any
              time they want, and these funds will not be reinvested elsewhere.
            </Block>
          </Section>
          <Section>
            <Subheadline>Termination</Subheadline>
            <Block>
              Your access to Nanobot may be terminated if you violate any of the
              terms and conditions outlined in this agreement.
            </Block>
          </Section>
          <Section>
            <Subheadline>Disclaimers and Limitations of Liability</Subheadline>
            <Block>
              You understand and agree that Nanobot is provided on an ”as is”
              and ”as available” basis. We are not responsible for any damages
              or losses that may occur as a result of using Nanobot, and you use
              Nanobot at your own risk.
            </Block>
          </Section>
          <Section>
            <Subheadline>Intellectual Property</Subheadline>
            <Block>
              We retain all intellectual property rights associated with
              Nanobot. You may not reproduce or distribute any part of Nanobot
              without our permission.
            </Block>
          </Section>
          <Section>
            <Subheadline>Governing Law</Subheadline>
            <Block>
              This agreement shall be governed by and construed in accordance
              with the laws of the United States of America. Any disputes
              arising out of or in connection with this agreement shall be
              subject to the exclusive jurisdiction of the courts of the United
              States of America.
            </Block>
          </Section>
          <Section>
            <Subheadline>Changes to Terms</Subheadline>
            <Block>
              We reserve the right to make changes to this agreement at any
              time. Users will be notified of any changes via Discord.
            </Block>
          </Section>
          <Section>
            <Subheadline>Contact Information</Subheadline>
            <Block>
              If you have any questions or concerns about Nanobot, please
              contact us at <Email />.
            </Block>
          </Section>
        </Document>
      </main>
    </Wrapper>
  );
}
