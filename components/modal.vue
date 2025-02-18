<template>
    <TransitionRoot as="template" :show="open">
        <Dialog class="relative z-10" @close="closeModal(false)">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-100 sm:mx-0 sm:size-10">
                                        <IconsInformationCircle v-if="type === ModalType.INFO" class="size-6 text-primary-600" />
                                        <IconsExclamationTriangle v-else class="size-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" class="text-xl font-semibold text-gray-900">{{ title }}</DialogTitle>
                                    <div class="pt-4 text-base">
                                        <slot />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                class="inline-flex w-full justify-center items-center rounded px-3 py-2 text-sm font-semibold sm:ml-3 sm:w-auto text-white bg-primary-500 hover:bg-primary-700 duration-200"
                                @click="closeModal(true)"
                            >
                                {{ approveText }}
                            </button>
                            <button
                                type="button"
                                class="mt-3 inline-flex w-full justify-center items-center rounded px-3 py-2 text-sm font-semibold sm:mt-0 sm:w-auto border-2 border-gray-100 text-gray-900 bg-white hover:bg-gray-100 duration-200"
                                @click="closeModal(false)"
                            >
                                Annuler
                            </button>
                        </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ModalType } from '~/enums/modalType';

defineProps({
    open: {
        type: Boolean,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    approveText: {
        type: String,
        default: 'Ok',
    },
    type: {
        type: Number as PropType<ModalType>,
        default: ModalType.INFO,
    },
});

const emit = defineEmits(['update:open', 'accepted']);

/**
 * Emit an event to notify the parent component to
 * close the modal. If accepted is true, it also
 * emits an event to notify that the action is accepted.
 * @param {boolean} accepted 
 */
const closeModal = (accepted: boolean = false) => {
    // Notify parent to close modal
    emit('update:open', false);
    accepted && emit('accepted', true);
};
</script>
