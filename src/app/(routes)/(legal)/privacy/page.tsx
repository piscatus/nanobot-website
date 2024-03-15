import Wrapper from "@/components/Wrapper";
import {
  Document,
  Headline,
  Subheadline,
  Section,
  Block,
  Email,
} from "@/components/utility/Markdown";

export default function Privacy() {
  return (
    <Wrapper>
      <main className="flex justify-center">
        <Document>
          <Headline>Privacy Policy</Headline>
          <Section>
            <Block>
              This privacy policy describes how the Nanobot bot (”we”, ”us”, or
              ”our”) collects, uses, and protects personal information from
              users (”you”) on the Discord platform.
            </Block>
          </Section>
          <Section>
            <Subheadline>Information Collection and Use</Subheadline>
            <Block>
              The only information we collect from users is Discord profile
              information, server activity timestamps and on-chain analytics.
              This information is used solely to improve the bot’s code and
              increase user satisfaction. We do not sell or share this
              information with any third parties. The data is securely held and
              accessible by one central authority, the bot owner.
            </Block>
            <div className="h-4"></div>
            <Block>
              Users have direct access to all of their user data through slash
              command interactions. If the bot is offline, or if a user would
              like to access their non-user-specific data, they can contact us
              at <Email />.
            </Block>
          </Section>
          <Section>
            <Subheadline>Security</Subheadline>
            <Block>
              We take appropriate security measures to protect personal
              information from unauthorized access, alteration, disclosure, or
              destruction. The bot is hosted on secure servers and is maintained
              by a team of trained professionals.
            </Block>
          </Section>
          <Section>
            <Subheadline>User Rights</Subheadline>
            <Block>
              As a user of our bot, you have the right to request access to or
              deletion of your personal information. If you would like to make
              such a request, please contact us at <Email />.
            </Block>
          </Section>
          <Section>
            <Subheadline>Updates</Subheadline>
            <Block>
              We may update this privacy policy from time to time by posting a
              new version on this page. We will notify you of any significant
              changes to this policy by sending a notification through the bot’s
              slash command interactions.
            </Block>
          </Section>
          <Section>
            <Subheadline>Contact Us</Subheadline>
            <Block>
              If you have any questions or concerns regarding this privacy
              policy or our use of your personal information, please contact us
              at <Email />.
            </Block>
          </Section>
        </Document>
      </main>
    </Wrapper>
  );
}
