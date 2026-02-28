import React from 'react';
import { Info, ExternalLink, Shield, Camera } from 'lucide-react';

export default function InfoScreen() {
    return (
        <div className="info-screen pt-header pb-24 min-h-screen bg-bg-color text-white p-6">
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-4 border-b border-white border-opacity-10 pb-2">
                    <Shield size={20} className="text-blue" />
                    <h2 className="text-xl font-semibold">Open Source Licenses</h2>
                </div>
                <div className="space-y-4">
                    <LicenseItem
                        name="React"
                        license="MIT License"
                        url="https://github.com/facebook/react/blob/main/LICENSE"
                    />
                    <LicenseItem
                        name="Lucide React"
                        license="ISC License"
                        url="https://github.com/lucide-react/lucide/blob/main/LICENSE"
                    />
                    <LicenseItem
                        name="Tailwind CSS"
                        license="MIT License"
                        url="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE"
                    />
                    <LicenseItem
                        name="Framer Motion"
                        license="MIT License"
                        url="https://github.com/framer/motion/blob/main/LICENSE"
                    />
                    <LicenseItem
                        name="Vite"
                        license="MIT License"
                        url="https://github.com/vitejs/vite/blob/main/LICENSE"
                    />
                </div>
            </section>

            <section className="mb-10">
                <div className="flex items-center gap-2 mb-4 border-b border-white border-opacity-10 pb-2">
                    <Camera size={20} className="text-blue" />
                    <h2 className="text-xl font-semibold">Photo Attributions</h2>
                </div>
                <div className="space-y-6">
                    <AttributionItem
                        source="Unsplash"
                        description="High-quality photography used throughout the Discover and Home screens."
                        url="https://unsplash.com"
                    />
                    <AttributionItem
                        source="Wikipedia / Wikimedia Commons"
                        description="Historical and educational imagery for Houston landmarks."
                        url="https://commons.wikimedia.org"
                    />
                    <AttributionItem
                        source="Pexels"
                        description="Additional architectural and lifestyle photography."
                        url="https://pexels.com"
                    />
                </div>
            </section>
        </div>
    );
}

function LicenseItem({ name, license, url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center p-4 bg-surface rounded-xl hover:bg-surface-hover transition-colors group"
        >
            <div>
                <h3 className="font-semibold text-white group-hover:text-blue transition-colors">{name}</h3>
                <p className="text-xs text-gray">{license}</p>
            </div>
            <ExternalLink size={16} className="text-gray group-hover:text-blue transition-colors" />
        </a>
    );
}

function AttributionItem({ source, description, url }) {
    return (
        <div className="p-4 bg-surface rounded-xl border border-white border-opacity-5">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-blue">{source}</h3>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray hover:text-white transition-colors"
                >
                    <ExternalLink size={14} />
                </a>
            </div>
            <p className="text-sm text-gray leading-relaxed">{description}</p>
        </div>
    );
}
