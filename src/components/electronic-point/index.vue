<script lang="ts" src="./index.ts"></script>

<template>
<g :class="['electron-point', className]">
    <circle ref="circle" cx="0" cy="0">
        <animate
            ref="animate"
            fill="freeze"
            attributeType="XML"
            attributeName="r"
            begin="indefinite"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines=".2 1 1 1"
            :values="`${animateFrom}; ${animateTo}`"
            :dur="`${this.animateTime}ms`">
        </animate>
    </circle>
    <rect
        x="-8.5" y="-8.5" height="17" width="17"
        @mouseenter.passive="mouseenter"
        @mouseleave.passive="mouseleave">
    </rect>
</g>
</template>
