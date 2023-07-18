"use client";

import { ColorInterface, SizeInterface } from "@/types";
import { SetStateAction, useState } from "react";
import Button from "./ui/button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "./ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: SizeInterface[];
  colors: Array<ColorInterface>;
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = (): void => setOpen(true);
  const onClose = (): void => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* {Background} */}
        <div className="fixed inset-0 bg-black bg-opacity-25">
          {/* Dialog Position  */}
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto overflow-x-hidden bg-white py-4 pb-6 shadow-xl">
              {/* Close Button  */}
              <div className="flex items-center justify-end">
                <IconButton icon={<X />} onClick={onClose} />
              </div>
              {/* Render the filters  */}
              <div className="p-4">
                <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                <Filter valueKey="colorId" name="Colors" data={colors} />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
