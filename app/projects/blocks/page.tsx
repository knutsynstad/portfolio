import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import { Metadata } from "next";
import StickyNote from "@/components/StickyNote";
import Code from "@/components/Code";

// Example apps
import PostMajority from "./assets/post-majority.png";
import PostMetablocks from "./assets/post-metablocks.png";
import PostMMOSnake from "./assets/post-mmo-snake.png";
import PostPixelary from "./assets/post-pixelary.png";
import PostPredictions from "./assets/post-predictions.png";
import PostSections from "./assets/post-sections.png";

import StacksAlignment from "./assets/stacks-alignment.png";
import StacksBorderWidth from "./assets/stacks-border-width.png";
import StacksCornerRadius from "./assets/stacks-corner-radius.png";
import StacksGap from "./assets/stacks-gap.png";
import StacksPadding from "./assets/stacks-padding.png";
import StacksReverse from "./assets/stacks-reverse.png";

import TextSize from "./assets/text-size.png";
import TextWeights from "./assets/text-weights.png";

import ButtonAppearance from "./assets/button-appearance.png";
import ButtonDisabled from "./assets/button-disabled.png";
import ButtonIconLabel from "./assets/button-icon-label.png";
import ButtonSizes from "./assets/button-sizes.png";

import ImageCover from "./assets/image-cover.png";
import ImageFill from "./assets/image-fill.png";
import ImageFit from "./assets/image-fit.png";
import ImageFixed from "./assets/image-fixed.png";
import ImageRelative from "./assets/image-relative.png";

import NavigateToFlow from "./assets/navigate-to-flow.svg";
import NavigateToDialog from "./assets/navigate-to.png";

import Forms from "./assets/forms.png";
import Toasts from "./assets/toasts.png";

import BlocksProps from "./assets/blocks-props.png";

const title = "Extending Reddit with Blocks.";

const description = (
  <>
    <p>
      <a href="https://developers.reddit.com">Devvit</a> and the Blocks UI
      framework empower anyone to build{" "}
      <a href="https://developers.reddit.com/docs/interactive_posts">
        Interactive Posts
      </a>{" "}
      on Reddit—from immersive games to advanced moderation tools—seamlessly
      extending Reddit&apos;s capabilities.
    </p>
    <p>
      As a &quot;write once, run everywhere&quot; platform, Devvit—and by
      extension, Blocks—is engineered to be platform-agnostic. The challenge was
      designing a framework that enable developers to create bespoke,
      community-driven experiences across a variety of platforms and devices
      with ease.
    </p>
    <p>
      My role was to design the underlying structure, components, and their
      properties that make this possible. We focused on harmonizing mobile and
      web development, balancing creative freedom with the need for consistency,
      accessibility, and performance. Through the use of sensible defaults, we
      deliver simplicity without sacrificing power.
    </p>
    <p>
      Additionally, by exposing parts of the Reddit Product Language (RPL),
      we&apos;ve introduced an abstraction layer that encourages opinionated
      design, ensuring a consistent and accessible experience across all
      applications.
    </p>
    <p>
      By federating the development of Reddit itself, we&apos;ve set the stage
      for emergent behavior—enabling the community to build for itself, by
      itself.
    </p>
  </>
);
const details = [
  {
    title: "Company",
    values: [{ name: "Reddit", url: "https://reddit.com" }],
  },
  {
    title: "Team",
    values: [{ name: "Developer Platform" }],
  },
  {
    title: "Category",
    values: [{ name: "UI Framework" }, { name: "Interactive Posts" }],
  },
  {
    title: "Links",
    values: [
      {
        name: "Reddit for Developers",
        url: "https://developers.reddit.com/",
      },
      {
        name: "Documentation",
        url: "https://developers.reddit.com/docs/blocks/overview",
      },
    ],
  },
];

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-8">
      <h2>Example apps with Blocks</h2>
      <div className="columns-3 column gap-8 break-inside-avoid">
        {[
          PostPixelary,
          PostPredictions,
          PostSections,
          PostMetablocks,
          PostMMOSnake,
          PostMajority,
        ].map((image, index) => (
          <Image
            src={image}
            alt={title}
            key={`stacks-${index}`}
            className="w-full mb-8 rounded-2xl shadow-2xl"
          />
        ))}
      </div>

      <h1 className="mt-32 mb-32">Guiding principles</h1>

      <div className="grid grid-cols-3 gap-8">
        <StickyNote
          title="Low Barrier, High Ceiling"
          description="Easy for beginners, with room to grow for experts."
        />
        <StickyNote
          title="Context-Agnostic"
          description="Seamlessly adapts across platforms without adjustments."
        />
        <StickyNote
          title="Composable"
          description="Modular components that combine and extend with ease."
        />
      </div>

      <div className="grid grid-cols-3 gap-8">
        <StickyNote
          title="Sensible Defaults"
          description="Intuitive defaults that work for most, with easy customization."
        />
        <StickyNote
          title="Lightweight"
          description="Fast and smooth, even in resource-constrained environments."
        />
        <StickyNote
          title="Inclusive"
          description="Designed for all users, including those with accessibility needs."
        />
      </div>

      <h1 className="mt-32 mb-32">The Blocks.</h1>
      {/* <Image
        src={BlocksProps}
        alt={title}
        key={`stacks-${BlocksProps}`}
        className="w-full mb-8 rounded-2xl shadow-2xl"
      /> */}
      <p>
        The Blocks framework borrows concepts of SwiftUI, CSS, and React to
        create a familiar, easy-to-learn experience for developers of all
        backgrounds, in line with{" "}
        <a href="https://lawsofux.com/jakobs-law/">Jakob&apos;s law</a>.
      </p>
      <p>
        The journey began by identifying the smallest set of primitives needed
        to build most higher-order components. For composition, we have{" "}
        <Code>&lt;hstack&gt;</Code>,<Code>&lt;vstack&gt;</Code>,
        <Code>&lt;zstack&gt;</Code>, and <Code>&lt;spacer&gt;</Code>, and for
        content, we have <Code>&lt;text&gt;</Code>, <Code>&lt;button&gt;</Code>,{" "}
        <Code>&lt;icon&gt;</Code>, and <Code>&lt;image&gt;</Code>. By composing
        these 8 Blocks, you can build almost any interface.
      </p>
      <p>
        You&apos;ll find some details about each below, but for a more in-depth
        look, check out the{" "}
        <a href="https://developers.reddit.com/docs/blocks/overview">
          Blocks documentation
        </a>
        .
      </p>

      <h2 className="mt-16">Stacks</h2>
      <p>
        The stack elements (<Code>&lt;vstack&gt;</Code>,{" "}
        <Code>&lt;hstack&gt;</Code>, and <Code>&lt;zstack&gt;</Code>) are
        flexible containers used to arrange child elements in different
        orientations and layers. Stacks can be nested, styled, and clicked if
        given an <Code>onPress</Code> handler. Stacks clip any overflowing
        content.
      </p>

      <div className="columns-2 column gap-8 break-inside-avoid">
        {[
          StacksAlignment,
          StacksBorderWidth,
          StacksCornerRadius,
          StacksGap,
          StacksPadding,
          StacksReverse,
        ].map((image, index) => (
          <Image
            src={image}
            alt={title}
            key={`stacks-${index}`}
            className="w-full mb-8 rounded-2xl shadow-2xl"
          />
        ))}
      </div>

      <h2 className="mt-16">Text</h2>
      <p>
        The <Code>&lt;text&gt;</Code> element enables you add and format text in
        your UI. By default, text blocks are limited to a single line. If you
        have a lot of text, it grows horizontally and the overflow gets clipped.
        There are two properties to make working with multi-line text easier:{" "}
        <Code>wrap</Code> and <Code>overflow</Code>. For text to wrap onto a new
        line, there needs to be a width defined.
      </p>

      <div className="columns-2 column gap-8 break-inside-avoid">
        {[TextSize, TextWeights].map((image, index) => (
          <Image
            src={image}
            alt={title}
            key={`stacks-${index}`}
            className="w-full mb-8 rounded-2xl shadow-2xl"
          />
        ))}
      </div>

      <h2 className="mt-16">Icon</h2>
      <p>
        The <Code>&lt;icon&gt;</Code> block includes all icons from the Reddit
        Product Language (RPL), a curated set of iconography.
      </p>

      <h2 className="mt-16">Button</h2>
      <p>
        The <Code>&lt;button&gt;</Code> element creates an interactive button
        that users can click or tap.
      </p>
      <div className="columns-2 column gap-8 break-inside-avoid">
        {[ButtonAppearance, ButtonSizes, ButtonDisabled, ButtonIconLabel].map(
          (image, index) => (
            <Image
              src={image}
              alt={title}
              key={`stacks-${index}`}
              className="w-full mb-8 rounded-2xl shadow-2xl"
            />
          )
        )}
      </div>

      <h2 className="mt-16">Image</h2>
      <p>
        The <Code>&lt;image&gt;</Code> element is used for embedding images into
        the UI.
      </p>
      <div className="columns-2 column gap-8 break-inside-avoid">
        {[ImageCover, ImageFill, ImageFit, ImageFixed, ImageRelative].map(
          (image, index) => (
            <Image
              src={image}
              alt={title}
              key={`stacks-${index}`}
              className="w-full mb-8 rounded-2xl shadow-2xl"
            />
          )
        )}
      </div>

      <h2 className="mt-16">Spacer</h2>
      <p>
        The <Code>&lt;spacer&gt;</Code> block is used to create adjustable space
        between UI elements.
      </p>

      <h2 className="mt-16">Web View</h2>
      <p>
        The <Code>&lt;webview&gt;</Code> block bypasses Blocks&apos;
        constraints, offering full control with custom HTML, CSS, and TypeScript
        within Reddit&apos;s platform. While Blocks is native on all platforms,{" "}
        <Code>&lt;webview&gt;</Code> allows custom extensions without waiting
        for native implementations.
      </p>

      <h1 className="mt-32 mb-32">UI effects.</h1>
      <h2>Adding links</h2>
      <Image
        src={NavigateToFlow}
        alt={title}
        key={NavigateToFlow.src}
        className="w-full rounded-2xl shadow-2xl"
      />
      <Image
        src={NavigateToDialog}
        alt={title}
        key={NavigateToDialog.src}
        className="w-full rounded-2xl shadow-2xl"
      />

      <h2 className="mt-16">Provide feedback with toasts</h2>
      <Image
        src={Toasts}
        alt={title}
        key={Toasts.src}
        className="w-full rounded-2xl shadow-2xl"
      />

      <h2 className="mt-16">Solicit user inputs with forms</h2>
      <Image
        src={Forms}
        alt={title}
        key={Forms.src}
        className="w-full rounded-2xl shadow-2xl"
      />
    </main>
  </>
);

export default Project;
