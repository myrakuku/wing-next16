
    Next.js 16 + Tailwind CSS V4 + Lucide React 


## 📁 資料夾結構
    public/
    └── image/
    ├── about/                # About 頁素材
    │   ├── about_1.jpeg
    │   ├── VincentTong.png
    │   └── about_bg.jpeg
    ├── contact/
    │   └── mv2.jpg           # Contact Banner 背景圖
    └── wing_logo.png         # 網站 Logo

    app/
    ├── page.tsx                  # 首頁
    ├── about/
    │   └── page.tsx              # About Us 頁面
    ├── services/
    │   └── page.tsx              # Services 服務頁
    ├── portfolio/
    │   └── page.tsx              # Portfolio 作品集頁
    ├── contact/
    │   └── page.tsx              # Contact 聯絡頁
    └── components/
    └── Navbar.tsx            # 導覽列（含手機漢堡 Toggle 選單）


### 🖼 圖片資源規範
- 所有靜態圖片放於 `public/image/`
- 在 TSX 直接使用路徑 `/image/xxx.jpg`，配合 Next.js `<Image>` 元件
- 路徑統一管理，避免背景圖路徑錯誤

