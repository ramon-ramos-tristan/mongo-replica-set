import * as pulumi from "@pulumi/pulumi";
import * as os from "@pulumi/openstack";

const node1 = new os.compute.Instance("node1", {
	flavorName: "large",
	imageName: "ubuntu-focal-20.04",
	keyPair: "Base",
	availabilityZone: "nova",
	securityGroups: ["default", "mongo"]
});

const node2 = new os.compute.Instance("node2", {
	flavorName: "large",
	imageName: "ubuntu-focal-20.04",
	keyPair: "Base",
	availabilityZone: "nova",
	securityGroups: ["default", "mongo"]
});

const node3 = new os.compute.Instance("node3", {
	flavorName: "large",
	imageName: "ubuntu-focal-20.04",
	keyPair: "Base",
	availabilityZone: "nova",
	securityGroups: ["default", "mongo"]
});


const floatingIP1 = new os.compute.FloatingIp("node1", {
    pool: "externa",
});

const floatingIP2 = new os.compute.FloatingIp("node2", {
    pool: "externa",
});

const floatingIP3 = new os.compute.FloatingIp("node3", {
    pool: "externa",
});

const FloatingIpAssociate = new os.compute.FloatingIpAssociate("fipa_1", {
    floatingIp: floatingIP1.address,
    instanceId: node1.id,
});

const FloatingIpAssociate1 = new os.compute.FloatingIpAssociate("fipa_2", {
    floatingIp: floatingIP2.address,
    instanceId: node2.id,
});

const FloatingIpAssociate2 = new os.compute.FloatingIpAssociate("fipa_3", {
    floatingIp: floatingIP3.address,
    instanceId: node3.id,
});


export const floatingIPAddress1 =  floatingIP1.address
export const floatingIP1Address =  node1.accessIpV4

export const floatingIPAddress2 =  floatingIP2.address
export const floatingIP2Address =  node2.accessIpV4

export const floatingIPAddress3 =  floatingIP3.address
export const floatingIP3Address =  node3.accessIpV4
