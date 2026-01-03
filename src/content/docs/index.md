---
title: "TIDA Importer 2026"
template: doc
---

**Seamlessly migrate from Ti-da Blog to WordPress.**

## Overview

**TIDA Importer 2026** is a comprehensive WordPress plugin designed to seamlessly migrate content from Ti-da blogs to WordPress. It supports the MT (Movable Type) export format and includes advanced features for image handling, category reconstruction, and legacy URL redirection.

> **Database & File Backup Required**
> Before running this importer, please ensure you have a complete backup of your WordPress database and files. Importing data carries inherent risks, and a backup ensures you can restore your site if anything goes wrong.

---

## Differences from Standard Importer

Unlike the generic [Movable Type and TypePad Importer](https://wordpress.org/plugins/movabletype-importer/), this plugin is specialized for Ti-da blogs:

| Feature | Standard Importer | TIDA Importer 2026 |
| :--- | :---: | :---: |
| **External Images** | ❌ (Hotlinks) | ✅ **Auto-download** |
| **Category Hierarchy** | ⚠️ (Flattened) | ✅ **Reconstructed** |
| **Legacy Redirects** | ❌ (None) | ✅ **Auto-created** |
| **Large Imports** | ⚠️ (Timeouts) | ✅ **Resume Capability** |
| **Featured Images** | ❌ (None) | ✅ **Auto-set** |
| **Tags / Keywords** | ⚠️ (Buggy) | ✅ **Fixed** |
| **Import Tag** | ❌ (None) | ✅ **Added** |

### Key Differences Detail
*   **Auto-Image Download**: Automatically detects external images, downloads them to your Media Library, and replaces the links (preventing hotlinking).
*   **Hierarchy Reconstruction**: Parses original blog URLs to faithfully restore the parent-child category structure.
*   **Smart Redirects**: Automatically creates redirects from legacy Ti-da/Hama-zo URL formats (e.g., `e12345.html`) to new WordPress permalinks.
*   **Reliable Import**: Supports resuming suspended imports, ensuring completion even with thousands of posts.

---

## Features

*   **MT Format Import**: Supports standard Movable Type export format (`.txt`) from Ti-da blogs.
*   **Resume Capability**: Automatically saves progress. If the import is interrupted (e.g., timeout or accidental close), it can be resumed from where it left off.
*   **Image Handling**:
    *   **Auto-Download**: Detects external images in posts, downloads them to the Media Library, and replaces links in the content.
    *   **De-duplication**: Uses URL hashing to prevent downloading the same image multiple times across different posts.
    *   **Protocol-Relative Support**: Correctly handles `//example.com/image.jpg` URLs.
    *   **Auto-Featured Image**: Automatically sets the first image found in the post as the Featured Image.
*   **Category Reconstruction**:
    *   Parses the original blog URL to reconstruct the category hierarchy (Parent > Child).
    *   Visual "Drag and Drop" interface to manually adjust category structure before finalizing.
*   **Legacy URL Redirects**: Creates redirects from old Ti-da URL formats (e.g., `e12345.html`) to the new WordPress post URLs.

---

## Installation

1.  Download the latest `tida-importer-2026.zip` from the [Releases page](https://github.com/ns29qrk/angra-tida-importer-2026/releases).
2.  Go to **Plugins > Add New Plugin > Upload Plugin** in your WordPress admin dashboard.
3.  Select the downloaded zip file and click **Install Now**.
4.  After installation, click **Activate Plugin**.

---

## Usage

### Step 1: Upload & Import
1.  Navigate to **TI-DA Importer** in the admin sidebar.
2.  Upload your Ti-da blog export file (`.txt`).
3.  (Optional) Enter your **Blog URL** to enable Sitemap parsing and Category reconstruction features.
4.  Click **Run Import**.
    *   A loading overlay will appear to prevent accidental navigation.
    *   **Do not close the tab** until the process completes.

### Step 2: Category Reconstruction
1.  After import, click **Next: Category Reconstruction** (or go to TI-DA Importer > Category Reconstruction).
2.  Ensure your **Blog URL** is entered.
3.  The plugin will analyze the original site's category structure.
4.  Review the structure in the visual editor:
    *   Drag and drop to reorder.
    *   Use `<` (Outdent) and `>` (Indent) buttons to change hierarchy levels.
5.  Click **Create Categories** to apply the structure to your imported posts.

---

## Disclaimer

*   **Use at your own risk.** The authors are not responsible for any data loss or damages caused by the use of this plugin.
*   Always **backup your database and files** before running an import.
*   This plugin is designed for standard Ti-da blog exports; customization may be required for heavily modified blogs.

## License

This plugin is licensed under the [GPL v2 or later](https://www.gnu.org/licenses/gpl-2.0.html).
