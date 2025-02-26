import { defineResource } from "@izumisy-tailor/fabrix-appshell";

export const custom = defineResource({
  type: "component",
  title: "Custom",
  category: "Pages",
  component: () => {
    return <div>Here is a custom page</div>;
  },
});
