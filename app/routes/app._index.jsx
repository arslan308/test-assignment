import {useEffect, useState , useCallback} from "react";
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  VerticalStack,
  Card,
  Button,
  Box,
  LegacyCard, 
  Tabs
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { session  } = await authenticate.admin(request);

  const shop = session.shop
  const apiAccessToken = session.accessToken;
  // TODO: Complete this function to fetch the assets from the Shopify API
  // and return the home, product, and collection templates.

  return json({ data: {} });
};

export let action = async ({request}) => {
  const { session  } = await authenticate.admin(request);

  const shop = session.shop
  const apiAccessToken = session.accessToken;
  // TODO: Complete this function to duplicate the selected asset
  // by creating a new asset with a random key and the same content.
  // format should be if homepage then index.{random10-characters-key}.liquid, collection then collection.{random10-characters-key}.liquid, product then product.{random10-characters-key}.liquid

  return json({status: 'success'});
};

export default function Index() {
  const { data } = useLoaderData();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const submit = useSubmit();
  const [selected, setSelected] = useState(0);
 

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );
  const tabs = [
    {
      id: 'all-customers-1',
      content: 'Home Pages',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1',
    },
    {
      id: 'accepts-marketing-1',
      content: 'Collection Pages',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'repeat-customers-1',
      content: 'Product Pages',
      panelID: 'repeat-customers-content-1',
    },
  ];

  const handleSelect = (asset) => {
    setSelectedAsset(asset);
  };
  const handleDuplicate = () => {
    // TODO: Complete this function to submit the form with the selected asset key and theme ID.
  };

  const renderCard = (asset) => {
    // TODO: Complete this function to render a card for each asset with its key, theme ID, and updated at time.
  };

  // TODO: Create the Tabs and Panels components and render the assets inside the Panels.

  return (
    <Page>
      <ui-title-bar title="Remix app template"></ui-title-bar>
      <VerticalStack gap="5">
        <LegacyCard>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
      <LegacyCard.Section title={tabs[selected].content}>
        <p>Tab {selected} selected</p>
      </LegacyCard.Section>
    </Tabs>
        </LegacyCard>
   
      </VerticalStack>
    </Page>
  );
  
}
