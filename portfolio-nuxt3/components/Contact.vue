<template>
  <section class="contact-section">
    <div class="contact-section-width">
      <div>
        <div class="img-container">
          <!-- <div
            class="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-indigo-50"
          >
            <UserIcon class="w-9 h-9 lg:w-10 lg:h-10" />
          </div> -->
          <div>
            <img
              src="/undraw_personal_email.svg"
              alt="personal email svg"
              width="890"
              height="730"
            />
          </div>
        </div>
        <div class="details-cta-container">
          <div>
            <h2>Get in touch with me</h2>
           
            <p v-if="isSeeking">
              If you have any questions, want to work together or just want to
              say hi. Feel free to reach me through my email or any of of my
              contact information in my resume.
            </p>
            <p v-else>
              Although I’m not looking for any opportunities, my inbox is
              always open. Whether you have a question, want to work together or
              just want to say hi, I’ll try my best to get back to you!
            </p>
          </div>
          <div>
            <a href="Dillongirkar30@gmail.com"> <EnvelopeIcon /> Say Hello! </a>
            <a
              v-if="isSeeking"
              href="/resume/my-resume.pdf"
              download="https://drive.google.com/file/d/1YXewuSpEY98NAa_BuuOdKW9qt5bOU8bE/view?usp=sharing"
              target="_blank"
            >
              <PaperClipIcon /> My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { EnvelopeIcon, PaperClipIcon } from "@heroicons/vue/24/outline";
const isSeeking = true;
</script>
