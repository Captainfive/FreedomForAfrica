<template>
  <div class="d-flex flex-column mb-6 ml-16 mr-16">
    <!-- PAYS -->

    <div ref="Hp" class="d-flex justify-start ml-16 mr-16">
      <v-sheet>
        <h1>{{ $t(`countries[${countryId}].name`) }}</h1>
      </v-sheet>
    </div>

    <div class="d-flex justify-start flex-column ml-16 mr-16">
      <!-- A. TITLE -->

      <v-sheet class="mb-6">
        <h2 class="text-decoration-underline">
          A. {{ $t(`countries[${countryId}].content.A.title`) }}
        </h2>
      </v-sheet>

      <ol>
        <!-- A1. TITLE -->

        <li class="text-decoration-underline ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.un`) }}
        </li>

        <!-- A1. CONTENT 1 -->

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.content_1`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">¹.</a>
          {{ $t(`countries[${countryId}].content.A.content_1_part_2`) }}
        </p>

        <!-- A2. TITLE -->

        <li class="text-decoration-underline ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.deux`) }}
        </li>

        <!-- A2. CONTENT 1 -->

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.content_2`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">².</a>
          {{ $t(`countries[${countryId}].content.A.content_2_part_2`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">³.</a>
          {{ $t(`countries[${countryId}].content.A.content_2_part_3`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">⁴.</a>
          {{ $t(`countries[${countryId}].content.A.content_2_part_4`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">⁵ </a>
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">⁶</a>
          {{ $t(`countries[${countryId}].content.A.content_2_part_5`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">⁷</a>
          {{ $t(`countries[${countryId}].content.A.content_2_part_6`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">⁸</a>
        </p>

        <!-- A3. TITLE -->

        <li class="text-decoration-underline ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.trois`) }}
        </li>

        <!-- A3. CONTENT 1 -->

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.content_3`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">⁹.</a>
        </p>

        <!-- A3. CONTENT 2 -->

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.content_3_part_2`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">¹⁰.</a>
          {{ $t(`countries[${countryId}].content.A.content_3_part_3`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">¹¹.</a>
          {{ $t(`countries[${countryId}].content.A.content_3_part_4`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('1')">¹².</a>
          {{ $t(`countries[${countryId}].content.A.content_3_part_5`) }}
        </p>
      </ol>
    </div>

    <div class="d-flex justify-start flex-column ml-16 mr-16">
      <!-- B. TITLE -->

      <v-sheet class="mb-6">
        <h2 class="text-decoration-underline">
          B. {{ $t(`countries[${countryId}].content.B.title`) }}
        </h2>
      </v-sheet>

      <ol id="shopping-list">
        <!-- B1. TITLE -->

        <li class="text-decoration-underline ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.B.un`) }}
        </li>

        <!-- B1. CONTENT 1 -->

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.B.content_1`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('2')">¹³</a>
          {{ $t(`countries[${countryId}].content.B.content_1_part_2`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('2')">¹⁴ </a>
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('2')">¹⁵</a>
          {{ $t(`countries[${countryId}].content.B.content_1_part_3`) }}
        </p>

        <!-- B2. TITLE -->

        <li class="text-decoration-underline ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.B.deux`) }}
        </li>

        <!-- B2. CONTENT 1 -->

        <!-- <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.B.content_2`) }}
        </p> -->
      </ol>
    </div>

    <div class="d-flex justify-start flex-column ml-16 mr-16">
      <!-- C. TITLE -->

      <v-sheet class="mb-6">
        <h2 class="text-decoration-underline">
          C. {{ $t(`countries[${countryId}].content.C.title`) }}
        </h2>
      </v-sheet>

      <ol id="shopping-list">
        <!-- C1. TITLE -->

        <li class="text-decoration-underline ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.C.un`) }}
        </li>

        <!-- C1. CONTENT 1 -->

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.C.content_1`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('2')">¹⁶</a>
          {{ $t(`countries[${countryId}].content.C.content_1_part_2`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('2')">¹⁷</a>
        </p>

        <!-- C2. TITLE -->

        <li class="text-decoration-underline ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.C.deux`) }}
        </li>

        <!-- C2. CONTENT 1 -->

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.C.content_2`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('2')">¹⁸</a>
          {{ $t(`countries[${countryId}].content.C.content_2_part_2`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('2')">¹⁹</a>
          {{ $t(`countries[${countryId}].content.C.content_2_part_3`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('2')">²⁰</a>
          {{ $t(`countries[${countryId}].content.C.content_2_part_4`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('2')">²¹</a>
        </p>

        <!-- C3. TITLE -->

        <li class="text-decoration-underline ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.C.trois`) }}
        </li>

        <!-- C3. CONTENT 1 -->

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.C.content_3`) }}
          <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('2')">²²</a>
        </p>

        <a
          class="mx-16 16 mb-6 pl-5"
          :href="$t(`countries[${countryId}].content.C.url`)"
          target="_blank"
          >{{ $t(`countries[${countryId}].content.C.url`) }}
        </a>
      </ol>
    </div>
    <!-- <v-divider class="my-12"></v-divider>

    <VRow>
      <VCol
        class="white-spacing d-flex flex-column"
        v-for="element in 22"
        :key="element"
        cols="6"
      >
        <span>
          {{ element }}.
          <span
            v-if="
              $t(
                `countries[${countryId}].content.AnchorTags[${
                  element - 1
                }].main_content`
              ) != `null`
            "
          >
            {{
              $t(
                `countries[${countryId}].content.AnchorTags[${
                  element - 1
                }].main_content`
              )
            }}
          </span>
        </span>
        <a
          v-if="
            $t(
              `countries[${countryId}].content.AnchorTags[${element - 1}].url`
            ) != `null`
          "
          :href="
            $t(`countries[${countryId}].content.AnchorTags[${element - 1}].url`)
          "
          target="_blank"
        >
          {{
                $t(
                  `countries[${countryId}].content.AnchorTags[${
                    element - 1
                  }].url`
                )
              }}
          {{ $t("ClickMe") }}
        </a>
        <span
          v-if="
            $t(
              `countries[${countryId}].content.AnchorTags[${
                element - 1
              }].consult`
            ) != `null`
          "
        >
          {{
            $t(
              `countries[${countryId}].content.AnchorTags[${
                element - 1
              }].consult`
            )
          }}
        </span>
      </VCol>
    </VRow> -->

    <div ref="1"></div>
    <v-divider class="my-12"></v-divider>

    <ol class="d-flex flex-column justify-center">

        <!-- Puce 1 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[0].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[0].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[0].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[0].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[0].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[0].consult`) }}</span>
      </li>

        <!-- Puce 2 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[1].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[1].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[1].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[1].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[1].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[1].consult`) }}</span>
      </li>

        <!-- Puce 3 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[2].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[2].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[2].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[2].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[2].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[2].consult`) }}</span>
      </li>

        <!-- Puce 4 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[3].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[3].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[3].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[3].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[3].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[3].consult`) }}</span>
      </li>

        <!-- Puce 5 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[4].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[4].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[4].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[4].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[4].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[4].consult`) }}</span>
      </li>

        <!-- Puce 6 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[5].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[5].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[5].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[5].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[5].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[5].consult`) }}</span>
      </li>

        <!-- Puce 7 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[6].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[6].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[6].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[6].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[6].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[6].consult`) }}</span>
      </li>

        <!-- Puce 8 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[7].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[7].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[7].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[7].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[7].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[7].consult`) }}</span>
      </li>

        <!-- Puce 9 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[8].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[8].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[8].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[8].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[8].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[8].consult`) }}</span>
      </li>

        <!-- Puce 10 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[9].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[9].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[9].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[9].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[9].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[9].consult`) }}</span>
      </li>

        <!-- Puce 11 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[10].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[10].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[10].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[10].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[10].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[10].consult`) }}</span>
      </li>

        <!-- Puce 12 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[11].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[11].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[11].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[11].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[11].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[11].consult`) }}</span>
      </li>

        <!-- Puce 13 -->
      
      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[12].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[12].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[12].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[12].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[12].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[12].consult`) }}</span>
      </li>

        <!-- Puce 14 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[13].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[13].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[13].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[13].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[13].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[13].consult`) }}</span>
      </li>

        <!-- Puce 15 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[14].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[14].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[14].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[14].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[14].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[14].consult`) }}</span>
      </li>

        <!-- Puce 16 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[15].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[15].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[15].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[15].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[15].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[15].consult`) }}</span>
      </li>

        <!-- Puce 17 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[16].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[16].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[16].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[16].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[16].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[16].consult`) }}</span>
      </li>

        <!-- Puce 18 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[17].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[17].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[17].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[17].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[17].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[17].consult`) }}</span>
      </li>

        <!-- Puce 19 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[18].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[18].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[18].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[18].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[18].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[18].consult`) }}</span>
      </li>

        <!-- Puce 20 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[19].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[19].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[19].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[19].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[19].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[19].consult`) }}</span>
      </li>

        <!-- Puce 21 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[20].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[20].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[20].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[20].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[20].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[20].consult`) }}</span>
      </li>

        <!-- Puce 22 -->

      <li class="mb-3">
        <span class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[21].main_content`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[21].main_content`) }}</span>
        <a class="mr-2" v-if="$t(`countries[${countryId}].content.AnchorTags[21].url`) != `null`" :href="$t(`countries[${countryId}].content.AnchorTags[21].url`)" target="_blank">{{ $t("ClickMe") }}</a>
        <span v-if="$t(`countries[${countryId}].content.AnchorTags[21].consult`) != `null`">{{ $t(`countries[${countryId}].content.AnchorTags[21].consult`) }}</span>
      </li>

    </ol>
    
    <v-divider class="my-5"></v-divider>

      <div class="d-flex justify-center">
        <a class="ma-0 pa-0 pointer" @click="scrollToAnchorPoint('Hp')">Haut de Page</a>
      </div>
      <v-sheet height="25px"></v-sheet>
  </div>
</template>

<script>
// import sourceData from "@/locales/fr.json";
// import sourceData2 from "@/locales/en.json";

// Exports
export default {
  data() {
    return {};
  },
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
  computed: {
    countryId() {
      return parseInt(this.$route.params.id) - 1;
    },
    // anchorTags() {
    //   if (localStorage.getItem("lang") === "fr") {
    //     // console.log(sourceData.countries)
    //     return sourceData.countries[1];
    //   }
    //   return sourceData2.countries;
    // },
    // country() {
    //   // return sourceData.countries.find(
    //   //   (country) => country.id === this.countryId +1
    //   // );
    //   if (localStorage.getItem("lang") === "fr") {
    //     return sourceData.countries.find(
    //       (country) => country.id === this.countryId + 1
    //     );
    //   }
    //   return sourceData2.countries.find(
    //     (country) => country.id === this.countryId + 1
    //   );
    // },
  },
};
</script>

<style scoped>
.v-btn {
  height: 100%;
  min-width: 0;
  font-size: 8px;
}
.pointer {
  cursor: pointer;
}
.white-spacing {
  white-space: normal !important;
}
a {
  white-space: normal !important;
  color: blue;
}
</style>