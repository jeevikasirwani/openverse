<template>
  <div class="absolute z-10 h-8 w-8 flex-none">
    <VIconButton
      :icon-props="{ name: iconName, rtlFlip: true }"
      :label="label"
      variant="transparent-gray"
      size="small"
      @click="$emit('click')"
    />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue"

import { defineEvent } from "~/types/emits"
import { useI18n } from "~/composables/use-i18n"

import VIconButton from "~/components/VIconButton/VIconButton.vue"

export default defineComponent({
  name: "VScroller",
  components: { VIconButton },
  props: {
    direction: {
      type: String as PropType<"forward" | "back">,
      required: true,
    },
  },
  emits: {
    click: defineEvent(),
  },
  setup(props) {
    const i18n = useI18n()
    const iconName = computed(() =>
      props.direction === "forward" ? "chevron-forward" : "chevron-back"
    )
    const label = computed(() =>
      i18n.t(
        props.direction === "forward"
          ? "mediaDetails.scroll.forward"
          : "mediaDetails.scroll.back"
      )
    )

    return {
      iconName,
      label,
    }
  },
})
</script>
