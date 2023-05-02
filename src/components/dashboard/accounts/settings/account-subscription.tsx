import SettingsCard from "@/components/dashboard/shared/settings-card";
import useTranslation from "next-translate/useTranslation";
import useAccountBillingStatus from "@/utils/api/use-account-billing-status";
import { Button } from "react-daisyui";
import { useMutation } from "@tanstack/react-query";

type Props = {
  accountId: string;
};

const AccountSubscription = ({ accountId }: Props) => {
  console.log("AccountId ",accountId);
  const { t } = useTranslation("dashboard");

  const { data } = useAccountBillingStatus(accountId);
  console.log("data from useAccountBillingStatus ",data);
  const getSubscriptionUrl = useMutation(
    async () => {

      try {
        console.log("accountId in  useMutation ",accountId);
        console.log("accountId in  useMutation, body ",JSON.stringify({ accountId }));
        const res = await fetch("/api/billing/portal-link", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ accountId }),
        });
        const { url } = await res.json();
        return url;

      } 
      
      catch (error) {
        console.log("Error from getSubscriptionUrl ",error);
      }
     
    },
    {
      onSuccess(url) {
         window.location.href = url;
        //console.log("URL ", url);
      },
    }
  );
  return (
    <>
      {data?.billing_enabled === false ? (
        <div className="flex flex-col items-center justify-center gap-y-4 max-w-screen-md mx-auto">
          <h2 className="text-2xl font-bold text-center">
            {t("accountSubscription.billingDisabled")}
          </h2>
          <p className="text-center">
            {t("accountSubscription.billingDisabledDescription")}
          </p>
        </div>
      ) : (
        <SettingsCard
          title={t("accountSubscription.title")}
          description={t("accountSubscription.description")}
        >
          <SettingsCard.Body>
            <h2 className="h3">
              {data?.plan_name} - {data?.status}
            </h2>
            {/* <p> */}
            <h2 className="h4">
              {t("accountSubscription.billingEmail")}
              </h2>
              <h2 className="h3">{data?.billing_email}</h2>
            {/* </p> */}
          </SettingsCard.Body>
          <SettingsCard.Footer>
            <Button
              color="primary"
              loading={getSubscriptionUrl.isLoading}
              onClick={() => getSubscriptionUrl.mutate()}
            >
              {t("accountSubscription.updatePlan")}
            </Button>
          </SettingsCard.Footer>
        </SettingsCard>
      )}
    </>
  );
};

export default AccountSubscription;
