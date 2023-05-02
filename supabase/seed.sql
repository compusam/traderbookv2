insert into basejump.config (enable_personal_accounts,
                             enable_team_accounts,
                             enable_account_billing,
                             billing_provider,
                             stripe_default_trial_period_days,
                             stripe_default_account_price_id,
                             id)
values (TRUE,
        FALSE,
        TRUE,
        'stripe',
        30,
        'price_1N2ykGIjdMOEqXkDW6KdqoJJ',1);