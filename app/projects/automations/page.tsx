import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import Slideshow from "@/components/Slideshow";
import Slide from "@/components/Slide";
import StickyNote from "@/components/StickyNote";

import Exhibit1 from "../../../public/images/automation_timeline_1.png";
import Exhibit2 from "../../../public/images/automations_model_step_count.png";
import Exhibit3 from "../../../public/images/automations_model_step_composition.png";
import Exhibit4 from "../../../public/images/automations_model_unified_component.png";
import Exhibit5 from "../../../public/images/automations_model_stacked_controls.png";
import Exhibit6 from "../../../public/images/automations_model_dynamic_inputs.png";

// Timelines
import timelineGamedayPost from "../../../public/images/timeline_create_and_pin_gameday_post.png";
import timelineGreetNewUser from "../../../public/images/timeline_greet_new_user.png";
import timelinePostFlair from "../../../public/images/timeline_post_flair.png";
import timelineRemovePost from "../../../public/images/timeline_remove_post.png";
import timelineRemoveAndBan from "../../../public/images/timeline_remove_post_and_ban_user.png";

// Creating an Automation
import AutomationsEmptyState from "../../../public/images/automations_empty_state.png";
import AutomationsChangingTheName from "../../../public/images/automations_changing_the_name.png";
import AutomationsSelectTrigger from "../../../public/images/automations_select_trigger.png";
import AutomationsTimelineWithTrigger from "../../../public/images/automations_timeline_with_trigger.png";
import AutomationsAddAStep from "../../../public/images/automations_add_a_step.png";
import AutomationsEmptyMessage from "../../../public/images/automations_empty_message.png";
import AutomationsPopulatedMessage from "../../../public/images/automations_populated_message.png";

// Automations index
import AutomationsListEmpty from "../../../public/images/automations_list_empty.png";
import AutomationsListPopulated from "../../../public/images/automations_list_populated.png";

// New assets folder
import AutomationsStepsLinear from "./assets/automations-steps-linear.png";
import AutomationsStepsComposition from "./assets/automations-steps-composition.png";

import AutomationsStepControlsSlot from "./assets/automations-step-controls-slot.png";
import AutomationsStepControlsStacked from "./assets/automations-step-controls-stacked.png";
import AutomationsStepControlsResponsive from "./assets/automations-step-controls-responsive.png";
import AutomationsStepControlsDynamic from "./assets/automations-step-controls-dynamic.png";

import AutomationsPropertyControls from "./assets/automations-property-controls.png";

const title = "Automating your Reddit workflows.";

const description = (
  <>
    <p>
      {/* Context */}
      AutoModerator is a site-wide moderation tool that you can set up and
      customize in any subreddit to assist you in moderating that community. It
      can handle many of the sometimes repetitive tasks you do as a mod.
      Essentially it&apos;s a bot that you can program with rules or
      instructions, to automate some of your moderating tasks.
    </p>
    <p>
      {/* Problem */}
      Unfortunately the barrier to entry for moderators has been too high.
      Relatively few are comfortable writing the error-prone YAML configuration,
      often thousands of lines line. Even fewer are comfortable writing
      complicated regular expressions (regex).
    </p>
    <p>
      {/* Opportunity */}
      AutoMod is ancient and was built on our R2 infrastructure that powers old
      reddit. We wanted to migrate automod to our new and shiny dev platform and
      saw took the opportunity to reframe and rebuild it from the ground up.
      Orders of magnitude more powerful than its predecesor and dead simple to
      use.
    </p>
    <p>
      Introducing Automations, a general purpose workflow Builder and Engine.
    </p>
  </>
);

const metadata = [
  {
    title: "Company",
    values: [
      {
        name: "Reddit",
        url: "https://www.reddit.com",
      },
    ],
  },
  {
    title: "Team",
    values: [
      {
        name: "Developer Platform",
      },
    ],
  },
  {
    title: "Role",
    values: [
      {
        name: "Design Lead",
      },
    ],
  },
  {
    title: "Categories",
    values: [
      { name: "Strategy" },
      { name: "UX Design" },
      { name: "UI Design" },
      { name: "Prototyping" },
    ],
  },
  {
    title: "Year",
    values: [
      {
        name: "2022",
      },
    ],
  },
];

const color = "#DAE0E3";

const Project = () => (
  <>
    <ProjectHeader
      title={title}
      description={description}
      metadata={metadata}
    />
    <main className="flex flex-col gap-16 mb-32">
      <div
        className="flex flex-col gap-32 pt-32 pb-32 mb-32 relative"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-nowrap gap-32 align-middle items-center justify-between">
          <Image
            src={Exhibit1}
            alt="Greet new user timeline"
            className="shrink-0 w-[496px]"
          />
          <h2>Welcome new users to the community</h2>
        </div>

        <div className="flex flex-nowrap gap-32 align-middle items-center justify-between">
          <h2>Create and manage event-based content</h2>
          <Image
            src={timelineGamedayPost}
            alt="Greet new user timeline"
            className="shrink-0 w-[496px]"
          />
        </div>

        <div className="flex flex-nowrap gap-32 align-middle items-center justify-between">
          <Image
            src={timelinePostFlair}
            alt="Greet new user timeline"
            className="shrink-0 w-[496px]"
          />
          <h2>Process content on creation</h2>
        </div>

        <div
          style={{ backgroundColor: color }}
          className={`absolute h-full top-0 left-0 w-[9000px] translate-x-[-9000px] z-[-1]`}
        />
        <div
          style={{ backgroundColor: color }}
          className={`absolute h-full top-0 right-0 w-[9000px] translate-x-[9000px] z-[-1]`}
        />
      </div>

      <h1>User journey</h1>
      <h2>Creating an automation</h2>
      <Slideshow>
        <Slide>
          <Image src={AutomationsEmptyState} alt={title} />
        </Slide>
        <Slide>
          <Image src={AutomationsChangingTheName} alt={title} />
        </Slide>
        <Slide>
          <Image src={AutomationsSelectTrigger} alt={title} />
        </Slide>
        <Slide>
          <Image src={AutomationsTimelineWithTrigger} alt={title} />
        </Slide>
        <Slide>
          <Image src={AutomationsAddAStep} alt={title} />
        </Slide>
        <Slide>
          <Image src={AutomationsEmptyMessage} alt={title} />
        </Slide>
        <Slide>
          <Image src={AutomationsPopulatedMessage} alt={title} />
        </Slide>
      </Slideshow>

      <h2 className="mt-16">Make as many Automations as you want</h2>
      <Slideshow>
        <Slide>
          <Image src={AutomationsListPopulated} alt={title} />
        </Slide>
        <Slide>
          <Image src={AutomationsListEmpty} alt={title} />
        </Slide>
      </Slideshow>

      <h1 className="mt-32 mb-32">Design rationale.</h1>

      <h2>Guiding principles</h2>
      <div className="grid grid-cols-3 gap-8">
        <StickyNote
          title="Approachable"
          list={[
            "Direct manipulation",
            "Clear mental models",
            "Linear execution",
            "No branching",
          ]}
        />
        <StickyNote
          title="Powerful"
          list={["Low barrier, high ceiling", "Context agnostic", "Composable"]}
        />
        <StickyNote
          title="Responsive"
          list={["Desktop and Mobile", "Lightweight", "Fast"]}
        />
      </div>

      <div className="grid grid-cols-12 gap-8 mt-32">
        <h2 className="col-start-1 col-span-7">The core model</h2>
        <p className="col-start-1 col-span-7">
          Automations are constructed along a timeline, a metaphor that readily
          resonates and facilitates comprehension. Once the triggering event
          takes place, the steps are performed sequentially, without branching.
          Add as many steps as needed.
        </p>
      </div>
      <Image
        src={AutomationsStepsLinear}
        alt="Model: Step Count"
        className="rounded-2xl"
      />

      <div className="grid grid-cols-12 gap-8 mt-32">
        <h2 className="col-start-1 col-span-7">Steps are extensible</h2>
        <p className="col-start-1 col-span-7">
          Steps possess the capability to invoke actions as well as halt the
          progression of the automation. These steps can be arranged in a
          flexible manner, allowing for uninhibited composition. The inherent
          potency of Automations lies in their elemental simplicity and the
          versatile manner in which they can be combined.
        </p>
      </div>

      <Image
        src={AutomationsStepsComposition}
        alt="Model: Step Composition"
        className="rounded-2xl"
      />

      <div className="grid grid-cols-12 gap-8 mt-32">
        <h2 className="col-start-1 col-span-7">Steps may be configured</h2>
        <p className="col-start-1 col-span-7">
          Some steps might necessitate configuration. Hence a UI accommodating
          both instances where no configuration is needed, as well as scenarios
          involving configurations with unspecified data structures. This
          wrapper must possess remarkable versatility, while minimizing the
          effort involved in constructing and maintaining an expanding
          collection of steps.
        </p>
        <p className="col-start-1 col-span-7">
          Designed to enable future expansions such as enabling others to build
          custom steps later.
        </p>
      </div>

      <Image
        src={AutomationsStepControlsSlot}
        alt="Model: Step Composition"
        className="rounded-2xl"
      />

      <div className="grid grid-cols-12 gap-8 mt-32">
        <h2 className="col-start-1 col-span-7">
          Flexible configuration for unknown data structures
        </h2>
        <p className="col-start-1 col-span-7">
          Build configuration interfaces as a list of pre-canned controls.
          Developers pick the type and order of controls. Avoids absolute
          positioning to reduce complexity associated with supporting different
          viewport sizes. The controls are full width and spaced evenly apart.
          Minimizes work for developers while ensuring consistency from step to
          step.
        </p>
      </div>

      <Image
        src={AutomationsStepControlsResponsive}
        alt="Model: Responsive Controls"
        className="rounded-2xl"
      />

      <div className="grid grid-cols-12 gap-8 mt-32">
        <h2 className="col-start-1 col-span-7">Progressive control reveal</h2>
        <p className="col-start-1 col-span-7">
          The number of controls can be dynamic based on user inputs. The
          controls are revealed progressively as the user makes selections. This
          allows for a more focused experience and reduces the cognitive load
          associated with a large number of controls.
        </p>
      </div>

      <Image
        src={AutomationsStepControlsDynamic}
        alt="Model: Dynamic Inputs"
        className="rounded-2xl"
      />

      <div className="grid grid-cols-12 gap-8 mt-32">
        <h2 className="col-start-1 col-span-7">Property controls</h2>
        <p className="col-start-1 col-span-7">
          A growing list of affordances to solicit user input. Supports a
          variety of data types and use cases. Rooted in Reddit&apos;s design
          system, Reddit Product Language, to ensure consistency, accessibility,
          and reduce development time.
        </p>
      </div>

      <Image
        src={AutomationsPropertyControls}
        alt="An overview of supported property controls"
        className="border border-[#DAE0E3] rounded-2xl"
      />
    </main>
  </>
);

export default Project;
