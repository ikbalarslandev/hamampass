import { Button } from "@hamampass/ui/primitives/button.tsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@hamampass/ui/primitives/dialog.tsx";
import { TBooking } from "@/types";
import moment from "moment";
import { useTranslations } from "@hamampass/i18n";
import { toast } from "@/components/ui/use-toast";
import { request } from "@/services/axios";

export function DeleteDialog({
  trigger,
  booking,
}: {
  trigger: React.ReactNode;
  booking: TBooking;
}) {
  const t = useTranslations("home.product-type");
  const del = useTranslations("my-bookings.details.delete");

  const handleDelete = async () => {
    await request({
      type: "delete",
      endpoint: `booking/${booking.id}`,
    });

    toast({
      title: "Booking Cancelled",
      description: "Your booking has been cancelled",
      duration: 500,
    });
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="flex flex-col w-[90%] rounded-lg">
        <DialogHeader>
          <DialogTitle>{del("title")}</DialogTitle>
          <DialogDescription>{del("desc")}</DialogDescription>
        </DialogHeader>

        <div className="flex justify-between">
          <p>{booking.property.title}</p>
          <p className="text-sm">{moment(booking.date).format("D MMM")}</p>
        </div>
        <div>
          {Object.entries(booking.products).map(([key, value]) => {
            return (
              <div key={key} className="flex justify-between">
                <p>{t(key.toString())}</p>
                <p>
                  {value.count} x {value.price}TL
                </p>
              </div>
            );
          })}
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              onClick={handleDelete}
              type="button"
              variant="secondary"
              className="w-full"
            >
              {del("yes")}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
