export default interface UserState {
    token: string;
    permissions: any;
    current: object | null;
    currentEComStore: object;
    instanceUrl: string;
    shopifyConfigs: any;
    currentShopifyConfig: any;
}